import {mapActions, mapGetters} from "vuex";

export const ebookMixin = {
	computed: {
		/*映射vux中state中变量*/
		...mapGetters([
			'fileName',
			'titleVisible',
			'settingVisible',
			'defaultFontSize',
			'defaultFontFamily',
			'fontFamilyVisible',
			'defaultTheme',
			'bookAvailable',
			'progress',
			'section',
			'isPaginating',
			'currentBook',
			'navigation',
			'cover',
			'metadata',
			'paginate',
			'pagelist',
			'offsetY',
			'isBookmark']),
	},
	methods: {
		...mapActions([
			'setFileName',
			'setTitleVisible',
			'setSettingVisible',
			'setDefaultFontSize',
			'setDefaultFontFamily',
			'setFontFamilyVisible',
			'setDefaultTheme',
			'setBookAvailable',
			'setProgress',
			'setSection',
			'setIsPaginating',
			'setCurrentBook',
			'setNavigation',
			'setCover',
			'setMetadata',
			'setPaginate',
			'setPagelist',
			'setOffsetY',
			'setIsBookmark'
		])
	}
}