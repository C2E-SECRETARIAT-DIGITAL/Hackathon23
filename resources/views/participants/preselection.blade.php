<x-app-layout>
    <x-slot name="header">
        <h2 class="text-xl font-semibold leading-tight text-gray-800">
            {{ __('Espace SDI') }}
        </h2>
    </x-slot>

    <div class="py-6">
        <div class="mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div class="overflow-hidden bg-white shadow-xl sm:rounded-lg">
                <div x-data="data()" class="w-full h-full">

                    <div class="bg-white">

                        <div>
                            @if(Auth::user()->etudiant->getEquipe()->qsession->state == 1)
                            <p x-show="!start" class="font-bold text-center text-md">
                                Les préselections ont commencées !
                            </p>
                            <div x-show="!start" class="text-center">
                                <button @click="start = true" class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 rounded shadow outline-none ease-linearbg-emerald-500 bg-myblue hover:shadow-lg focus:outline-none">
                                    Commencer le test
                                </button>
                            </div>
                            @elseif(Auth::user()->etudiant->getEquipe()->qsession->state == 0 && Auth::user()->etudiant->getEquipe()->qsession->score == 0)
                            <p class="font-bold text-center text-orange text-md">
                                Les préselections commencent bientôt, tenez vous prêt(e) !
                            </p>
                            @else
                            <p class="font-bold text-center text-red-600 text-md">
                                Dommage La prochaine fois sera la bonne
                            </p>
                            @endif
                        </div>
                        @if(Auth::user()->etudiant->getEquipe()->qsession->state == 1)
                        <div x-show="start" class="w-full h-full ">
                            @livewire('participants.quiz')
                        </div>
                        @endif
                    </div>

                </div>
            </div>
        </div>
    </div>


    <x-slot name="scripts">

        <script>
            function data() {
                return {
                    start: true,
                }
            }
        </script>

    </x-slot>

</x-app-layout>