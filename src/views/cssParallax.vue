<template>
    <div class="parallax">
        <div class="parallax__layer layer-bgr">
            background
        </div>
        <div class="parallax__layer layer-frg">
            foreground
            <a href="/jsParallax">js parallax</a>
            <a href="/cssParrallax">css parallax</a>
        </div>

    </div>
</template>

<script>

</script>

<style scoped>
.parallax {
    width: 100vw;
    height: 200vh;
    perspective: 1px;
    position: relative;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
}

.parallax__layer {
    position: absolute;
    top: 0;
    left: 0;
}

.layer-bgr {
    width: 100%;
    height: 200vh;
    background: url(@/assets/bgr.jpg);
    transform: translateZ(-1px) scale(2);
}

.layer-frg {
    margin-top: 20vh;
    width: 60vw;
    margin-left: 15%;
    height: 200vh;
    background: rgba(207, 106, 210, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);


    display: flex;
    flex-direction: column;

}

a{
    font-size: 48px;
}
</style>