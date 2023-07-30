<template>
    <div class="sidebar">
        <div class="sidebar__line"></div>
        <div class="sidebar__text">
            <slot></slot>
        </div>
        <div class="sidebar__line"></div>
    </div>
</template>

<style lang="scss">
.sidebar {
    display: flex;
    margin: 0 auto;
    width: 43.125rem;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    &__line {
        height: 0.0695rem;
        width: 14.6875rem;
        background-color: #D38235;
    }

    &__text {
        padding: 0 2.5rem;
        font-size: 1.25rem;
        font-weight: 300;
        line-height: 130%;
        text-align: center;
        color: var(--copper, #D38235);
    }
}
</style>