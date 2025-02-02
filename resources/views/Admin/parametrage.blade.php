<x-app-layout>

    <div class="py-6">
        <div class="mx-auto max-w-8xl sm:px-6 lg:px-8">
            <div class="overflow-hidden bg-white shadow-xl sm:rounded-lg">
                
                <div x-data="Tabsetup()" class="w-full h-full">
                    <ul class="flex items-center justify-center mt-2 mb-4">
                        <template x-for="(tab, index) in tabs" :key="index">
                            <li class="px-4 text-gray-500 border-b-8 cursor-pointer"
                                :class="activeTab===index ? 'text-orange border-orange' : '' " @click="activeTab = index"
                                x-text="tab"></li>
                        </template>
                    </ul>
            
                    <div class="w-full h-full bg-white">
                        <div x-show="activeTab===0" >
                            @livewire('admin.parametrage.hackaton')
                        </div>
                        <div x-show="activeTab===1" >
                            @livewire('admin.parametrage.niveau')
                        </div>
                        <div x-show="activeTab===2" >
                            @livewire('admin.salle')
                        </div>
                        <div x-show="activeTab===3" >
                            @livewire('admin.parametrage.repartition')
                        </div>
                        <div x-show="activeTab===4" >
                            @livewire('admin.parametrage.preselection')
                        </div>
                        <div x-show="activeTab===5" >
                            @livewire('admin.restauration.repas')
                        </div>
                        {{-- <div x-show="activeTab===2" >
                           Yatana 1 
                        </div>
                        <div x-show="activeTab===3" >
                            Regis
                        </div> --}}
                    </div>
                    
                    <div class="flex justify-center gap-4 p-2 border-t">
                        <button
                            class="px-4 py-2 text-sm font-bold uppercase border rounded-md cursor-pointer text-orange border-orange hover:bg-orange hover:text-white hover:shadow"
                            @click="activeTab--" x-show="activeTab>0"
                            >Précédent</button>
                        <button
                            class="px-4 py-2 text-sm font-bold uppercase border rounded-md cursor-pointer border-orange text-orange hover:bg-orange hover:text-white hover:shadow"
                            @click="activeTab++" x-show="activeTab<tabs.length-1"
                            >Suivant</button>
                    </div>
                </div>
                

            </div>
        </div>
    </div>


    <x-slot name="scripts" >
        <script>
            function Tabsetup() {
                return {
                activeTab: 0,
                tabs:['Hackaton', 'Niveaux', 'Salle', 'Repartition', 'Preselection', 'Restauration']
                
                };
            };
        </script>
    </x-slot>

</x-app-layout>