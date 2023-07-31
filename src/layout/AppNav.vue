<template>
    <nav class="nav">
        <div class="social">
            <ul>
                <li v-for="item in socials" :key="item.name">
                    <a :id="item.name" href="#" class="social__link" :class="item.icon"></a>
                </li>
            </ul>
        </div>
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
    right: 1.25rem;
    z-index: 10;
    display: flex;
}

.social {
    position: relative;
    width: 3.4375rem;
    height: 3.4375rem;
    background-image: url(../../public/img/svg/sharing.svg);
    background-size: 100%;
    background-position: center;

    &:hover {
        ul {
            display: block;
        }
    }

    ul {
        position: absolute;
        top: 100%;
        display: none;
    }

    &__link {
        display: block;
        width: 3.4375rem;
        height: 3.4375rem;
        background-size: 100%;
        background-position: center;
    }

    #vk {
        background-image: url(../../public/img/svg/vk.svg);
    }

    #telegram {
        background-image: url(../../public/img/svg/telegram.svg);
    }

    #ok {
        background-image: url(../../public/img/svg/ok.svg);
    }
}

.burger {
    background-size: 100%;
    background-position: center;
    width: 3.4375rem;
    height: 3.4375rem;
    background-image: url(../../public/img/svg/burger.svg);
}
</style>