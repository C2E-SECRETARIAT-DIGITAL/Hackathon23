// resources/components/QrCode.vue

<template>

    <div>

        <!-- <span class="font-bold" v-if="!seen"> Scanner le code QR</span>
        <br>

        <qrcode-stream @decode="onDecode"></qrcode-stream>

        <div class="flex items-center justify-center h-32 py-4">
            <form action="{{route('qrcode.Soumission',null,false)}}" method="POST">
                @csrf
                <input id="Qrcodevalue" name='qrcodeValue' type="hidden">
                <button v-if="seen" type="submit" class="px-3 py-2 font-bold text-white bg-indigo-800 rounded-md">
                    Validation
                </button>
            </form>
        </div> -->

        <qrcode-stream @decode="onDecode" @init="onInit" />

    </div>

</template>

<script>

import { QrcodeStream, QrcodeDropZone } from 'vue-qrcode-reader'

export default {
    name: 'QrCode',
    components: {
        QrcodeStream,
        QrcodeDropZone,
    },
    data() {
        return {
            message: 'Hello Vue!',
            seen: false
        }
    },
    methods: {
        onDecode(decodedString) {
            this.message = decodedString;
            this.seen = true
            document.getElementById("Qrcodevalue").value = this.message
        },

        async onInit(promise) {
            try {
                await promise
            } catch (error) {
                if (error.name === 'NotAllowedError') {
                    this.error = "ERROR: you need to grant camera access permission"
                } else if (error.name === 'NotFoundError') {
                    this.error = "ERROR: no camera on this device"
                } else if (error.name === 'NotSupportedError') {
                    this.error = "ERROR: secure context required (HTTPS, localhost)"
                } else if (error.name === 'NotReadableError') {
                    this.error = "ERROR: is the camera already in use?"
                } else if (error.name === 'OverconstrainedError') {
                    this.error = "ERROR: installed cameras are not suitable"
                } else if (error.name === 'StreamApiNotSupportedError') {
                    this.error = "ERROR: Stream API is not supported in this browser"
                } else if (error.name === 'InsecureContextError') {
                    this.error = 'ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.';
                } else {
                    this.error = `ERROR: Camera error (${error.name})`;
                }
            }
        }
    },

    created() {
        console.log("hello")
    }
}
</script>