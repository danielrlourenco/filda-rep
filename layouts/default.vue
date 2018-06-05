<template>
    <div>
<!--        <div class="drawer left-drawer"></div>-->
<!--
        <div class="drawer right-drawer">
            <mobile-nav/>
        </div>


        <div class="content-drawer" id="top">
-->
            <top-header/>
            <nuxt/>
            <bottom-footer/>
        </div>
<!--    </div>-->
</template>


<script>


    //import MobileNav from '~/components/MobileNav.vue'
    import TopHeader from '~/components/TopHeader.vue'
    import BottomFooter from '~/components/BottomFooter.vue'
    export default {
        components: {
            //MobileNav,
            TopHeader,
            BottomFooter
        }
    }

</script>




<style>

</style>
