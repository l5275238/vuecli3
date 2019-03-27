<template>
    <div class="title">
        <h1>{{details.name}}</h1>
    </div>
</template>

<script>
    export default {
        name: "preview",
        props:{
            details:{

            }
        }
    }
</script>

<style scoped lang="less">
    .title{
        background: url("./header.png");
        background-size: cover;
        height: 64px;
        padding: 23px 40px 0 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        >h1{
            font-size: 17px;


        }
    }

</style>
