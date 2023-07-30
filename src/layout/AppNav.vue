<template>
    <nav class="nav">
        <ul class="social">
            <li v-for="item in socials" :key="item.name">
                <a :id="item.name" href="#" class="social__link" :class="item.icon"></a>
            </li>
        </ul>
        <ul class="burger">
            <!-- <li></li>
                <li></li>
            <li></li> -->
        </ul>
    </nav>
</template>
  
<script>

export default {
    data() {
        return {
            socials: [
                {
                    name: 'telegram',
                    link: '',
                    icon: ''
                },
                {
                    name: 'vk',
                    link: '',
                    icon: ''
                },
                {
                    name: 'ok',
                    link: '',
                    icon: ''
                },
            ]
        }
    }
}
</script>

<style lang="scss">
    .nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }

    .social {
        &__link {
            display: block;
            width: 55px;
            height: 55px;
            background-size: 100%;
            background-position: center;
        }

        .vk {
            background-image: url(../../public/img/svg/vk.svg);
        }
    }

</style>