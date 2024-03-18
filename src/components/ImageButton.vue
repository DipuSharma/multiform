<template>
    <div>
        <v-btn scope class="text-none" depressed large :loading="isSelecting" @click="onButtonClick">{{ buttonText }}</v-btn>
        <input ref="uploader" name="file" class="d-none" type="file" accept="image/*, application/pdf" @change="onFileChanged">
    </div>
</template>

<script>
export default {
    name: 'ImageButton',
    data: () => ({
        defaultButtonText: 'Upload',
        selectedFile: null,
        isSelecting: false
    }),
    computed: {
        buttonText() {
            return this.selectedFile ? this.selectedFile.name : this.defaultButtonText
        }
    },
    methods: {
        onButtonClick() {
            this.isSelecting = true
            window.addEventListener('focus', () => {
                this.isSelecting = false
            }, { once: true })

            this.$refs.uploader.click()
        },
        onFileChanged(e) {
            this.selectedFile = e.target.files[0]

            // do something
        }
    },
}
</script>

<style scoped>
.v-btn {
    border-radius: 28px !important;
    background-color: white !important;
    color: #146CC9 !important;
    border: 2px solid #146CC9 !important;
}
</style>