<template>
    <div class="ebook-menu">
        <transition>
            <div class="menu-wrapper" :class="{'hide-box-shadow':!titleVisible || settingVisible > -1}" v-show="titleVisible">
                <div class="icon-wrapper">
                    <span class="icon-menu" @click="showSetting(3)"></span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon-progress" @click="showSetting(2)"></span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon-bright" @click="showSetting(1)"></span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon-A" @click="showSetting(0)"></span>
                </div>
            </div>
        </transition>
        <ebook-setting-font></ebook-setting-font>
        <ebook-setting-font-popup></ebook-setting-font-popup>
    </div>
</template>

<script>
	import {ebookMixin} from "@/utils/mixin";
	import EbookSettingFont from "@/components/ebook/EbookSettingFont";
	import EbookSettingFontPopup from "@/components/ebook/EbookSettingFontPopup";

	export default {
		name: "EbookMenu",
		components: {EbookSettingFontPopup, EbookSettingFont},
		mixins:[ebookMixin],
		methods: {
			showSetting(key) {
                this.setSettingVisible(key)
			}
		}
	}
</script>

<style scoped lang="scss">
    @import "../../assets/styles/global";

    .menu-wrapper {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 200;
        display: flex;
        width: 100%;
        height: px2rem(48);
        box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
        font-size: px2rem(22);

        &.hide-box-shadow {
            box-shadow: none;
        }

        .icon-wrapper {
            flex: 1;
            @include center;

            .icon-progress {
                font-size: px2rem(24);
            }

            .icon-A {
                font-size: px2rem(20);
            }
        }
    }
</style>