<template>
    <div class="parallax">
        <img src="@/assets/bgr.jpg" class="layer-bgr" ref="parallaxBgr">
        <div class="layer-frg" ref="parallaxFrg">
            foreground

            <a href="/jsParallax">js parallax</a>
            <a href="/cssParrallax">css parallax</a>
        </div>

    </div>
</template>

<script>

export default {
    data(){
        return {
            prevScrollY: 0,
        }
    },
    mounted(){
        window.addEventListener('scroll',this.onscroll)
    },
    beforeUnmount(){
        window.removeEventListener('scroll',this.onscroll)
    },
    methods:{
        onscroll(event){

            let parallaxMod = window.scrollY * 0.5;
            this.$refs.parallaxBgr.style.transform ='translateY('+parallaxMod +'px)';

            console.log('translateY('+parallaxMod +'px)');
            this.prevScrollY = window.scrollY;
        }
    }
}

</script>

<style scoped>
.parallax {
    width: 100vw;
    height: auto;

}

.layer-bgr {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit:cover;
    top: 0;
}

.layer-frg {
    margin-top: 20vh;
    width: 60vw;
    margin-left: 15%;
    height: 400vh;

    background: rgba(207, 106, 210, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    display: flex;
    flex-direction: column;
    position: relative;

    transition: all 0.3ms ;
}

a{
    font-size: 48px;
}
</style>