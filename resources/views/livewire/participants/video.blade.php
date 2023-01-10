<div>
    <p class="font-bold text-center text-md">Vous n'avez pas de video</p>

    <form wire:submit.prevent="addVideo" class="mt-5">

        <input type="file" wire:model="video" required accept="video/*">

        @error('video') <span class="error">{{ $message }}</span> @enderror

        <div class="text-center mt-5">
            <button type="submit" class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 rounded shadow outline-none ease-linearbg-emerald-500 bg-myblue hover:shadow-lg focus:outline-none">
                Importer video
            </button>
        </div>

    </form>
</div>