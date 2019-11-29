<template>
    <div id="ebook-reader">
        <div id="reader">

        </div>
    </div>
</template>

<script>
	import Epub from 'epubjs'
	import {ebookMixin} from "@/utils/mixin";

	global.ePub = Epub
	export default {
		name: "EbookReader",
        mixins:[ebookMixin],
		mounted() {
			//获取url上的书名
			const fileName = this.$route.params.fileName
			//改变vuex中的fileName值
			this.setFileName(fileName).then(() => {
				this.initEpub()
			})
		},
		data() {
			return {}
		},
		methods: {
			/**
			 * 初始化电子书
			 */
			initEpub() {
				const url = 'http://127.0.0.1:8081/epub2/' + this.fileName + '.epub'
				this.book = new Epub(url)
                this.setCurrentBook(this.book)
				this.rendition = this.book.renderTo('reader', {
					width: innerWidth,
					height: innerHeight,
				})
				/*渲染电子书*/
				this.rendition.display()

				/*绑定自己的事件到iframe里面*/
				//开始触碰屏幕
				this.rendition.on('touchstart', event => {
					//第一根手指触碰的起点位置
					this.touchStartX = event.changedTouches[0].clientX
					//手指触碰到离开的时间
					this.touchStartTime = event.timeStamp

				})

				//结束触碰屏幕
				this.rendition.on('touchend', event => {
					//从触碰到离开的x轴的偏移量
					const offsetX = event.changedTouches[0].clientX - this.touchStartX
					//消耗时间
					const time = event.timeStamp - this.touchStartTime
					console.log(`偏移量：${offsetX}   ,time:${time}`)

					/*设定翻页滑动时间和偏移距离*/
					if (time < 500 && offsetX > 40) {
						/*翻上一页*/
						this.prevPage()
					} else if (time < 500 && offsetX < -40) {
						/*翻下一页*/
						this.nextPage()
					} else {
						/*显示导航*/
						this.toggleTitleMenu()
					}

					/*禁止dom默认行为及冒泡*/
					event.preventDefault()
					event.stopPropagation()
				})

                /*调用rendition的钩子函数，向dom注入样式*/
                this.rendition.hooks.content.register(contents => {
                	Promise.all([
		                contents.addStylesheet(`${process.env.VUE_APP_RES_URL}fonts/tangerine.css`),
		                contents.addStylesheet(`${process.env.VUE_APP_RES_URL}fonts/cabin.css`),
		                contents.addStylesheet(`${process.env.VUE_APP_RES_URL}fonts/daysOne.css`),
		                contents.addStylesheet(`${process.env.VUE_APP_RES_URL}fonts/montserrat.css`)
                    ]).then(()=>{
                    	console.log('.env.development为环境变量配置文件，环境变量的加载需要重启项目')
                    })

                })
			},

			/**
			 * 翻上页
			 */
			prevPage() {
				if (this.rendition) {
					this.rendition.prev()
					this.hideTitleMenu()
				}
			},

			/**
			 * 翻下页
			 */
			nextPage() {
				if (this.rendition) {
					this.rendition.next()
					this.hideTitleMenu()
				}
			},

			/**
			 * 显示隐藏导航
			 */
			toggleTitleMenu() {
				if (this.titleVisible) {
					this.setSettingVisible(-1)
                    this.setFontFamilyVisible(false)
                }
				this.setTitleVisible(!this.titleVisible)
			},

			/**
			 * 隐藏导航
			 */
			hideTitleMenu() {
				this.setTitleVisible(false)
                this.setSettingVisible(-1)
                this.setFontFamilyVisible(false)
			}

		}

	}
</script>

<style scoped>
    /* #ebook-reader {
         height: 100vh;
     }

     #reader {
         height: inherit;
     }*/
</style>