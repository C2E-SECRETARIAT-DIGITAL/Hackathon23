<div>
    <!-- <p id="countm" style="display: none;">{{Auth::user()->etudiant->getEquipe()->qsession->quiz->time}}</p>
    <input wire:model="count_down" type="text" style="display: none;"/>
    <span id="counts" style="display: none;">1</span> -->
    <div class="col-span-6" style="margin: 30px 0;">

        <div class="col-span-6 w-full">
            <div class="md:grid md:grid-cols-6">
                <div class="col-span-6">
                    <div class="flex flex-col">
                        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">

                                    <table class="min-w-full divide-y table-auto  divide-gray-200">

                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th scope="col" class="text-center px-6 py-3 text-xs font-bold tracking-wider text-left text-gray-500 uppercase">
                                                    {{$quiz->questions[$current_index]->content}} {{$count_down}}
                                                </th>
                                            </tr>

                                        </thead>

                                        <tbody class="bg-white divide-y divide-gray-200">
                                            @foreach($quiz->questions[$current_index]->responses as $response)

                                            <tr>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="ml-4">
                                                            <div class="font-bold text-gray-900 text-md">
                                                                <input wire:model="sponses.{{$response->id}}" type="checkbox" name="r{{$response->id}}" id="r{{$response->id}}" checked />
                                                            </div>
                                                        </div>
                                                        <div class="ml-4">
                                                            <div class="font-bold text-gray-900 text-md">
                                                                <label for="r{{$response->id}}">
                                                                    {{$response->content}}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div>
        <!-- <button wire:click="storeAnswers()">Click</button> -->
        <p>Questions: {{$current_index + 1}} / {{sizeof($quiz->questions)}} </p>
    </div>

    <div class="flex justify-center gap-4 p-2 border-t">
        @if($pre)
        <button class="px-4 py-2 text-sm font-bold uppercase border rounded-md cursor-pointer text-orange border-orange hover:bg-orange hover:text-white hover:shadow" wire:click="moveQuestion(-1)">Précédent</button>
        @endif

        @if($next)
        <button class="px-4 py-2 text-sm font-bold uppercase border rounded-md cursor-pointer border-orange text-orange hover:bg-orange hover:text-white hover:shadow" wire:click="storeAndMove(1)">Suivant</button>
        @else
        <button class="px-4 py-2 text-sm font-bold uppercase border rounded-md cursor-pointer bg-red-600 text-white hover:shadow" wire:click="storeAndExit()">Terminer</button>
        @endif
    </div>



    <!-- <script>
        var count = setInterval(function() {

            var min = parseInt(document.getElementById('countm').innerText)
            var sec = parseInt(document.getElementById('counts').innerText)

            if (sec == 0 && min != 0) {
                min -= 1
                sec = 60
            }

            sec -= 1
            if (sec < 10)
                sec = "0" + String(sec)

            document.getElementById('minutes').innerText = min
            document.getElementById('countm').innerText = min

            document.getElementById('seconds').innerText = sec
            document.getElementById('counts').innerText = sec

        }, 1000)
    </script> -->


</div>