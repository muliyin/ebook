<template>
    <div id="ebook">
        <ebook-title></ebook-title>
        <ebook-menu></ebook-menu>
        <ebook-reader></ebook-reader>
    </div>
</template>

<script>
	import EbookReader from "@/components/ebook/EbookReader";
	import EbookTitle from "@/components/ebook/EbookTitle";
	import EbookMenu from "@/components/ebook/EbookMenu";
	export default {
		name: "index",
		components: {EbookMenu, EbookTitle, EbookReader}
	}
</script>

<style scoped lang="scss">
@import "../../assets/styles/global";
</style>