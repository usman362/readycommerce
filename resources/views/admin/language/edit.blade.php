@extends('layouts.app')
@section('content')
    <div class="container-fluid">
        <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <h4 class="m-0">{{ __('Edit Language') . '(' . $language->name . ')' }}</h4>
            <a href="{{ route('admin.language.index') }}" class="btn btn-danger">
                {{ __('Back') }}
            </a>
        </div>

        <div class="card border-0 shadow-sm rounded-12 mt-4">
            <div class="card-body">
                <form action="{{ route('admin.language.update', $language->id) }}" method="POST">
                    @csrf
                    @method('put')
                    <label for="" class="form-label fw-bold mb-1">
                        {{ __('Title') . ' for ' . $language->name . '' }}
                    </label>
                    <div class="input-group">
                        <input type="text" name="title" class="form-control py-2.5" placeholder="title"
                            value="{{ $language->title }}" />
                        <button type="submit" class="input-group-text btn btn-primary">
                            <i class="fa-solid fa-floppy-disk"></i>
                            {{ __('Update') }}
                        </button>
                    </div>
                    @error('title')
                        <p class="text-danger m-0">{{ $message }}</p>
                    @enderror
                </form>
            </div>
        </div>

        <div class="row mb-4 mt-4">
            <div class="col-md-6">
                <div class="card shadow border-0 rounded-lg import-card">
                    <div class="card-body text-center">
                        <h4 class="text-dark mb-2 font-weight-bold">
                            {{ __('Select JSON File to Import') }}
                        </h4>
                        <p class="text-muted mb-3">
                            Upload a JSON file to update your language settings.
                        </p>

                        <form action="{{ route('admin.language.import', $language->id) }}" method="POST"
                            enctype="multipart/form-data" id="bulkForm">
                            @csrf

                            <!-- Enhanced Drop Zone -->
                            <div class="drop-zone mx-auto">
                                <span class="drop-zone__prompt">
                                    <div class="icon">
                                        <i class="fa-solid fa-cloud-arrow-up"></i>
                                    </div>
                                    {{ __('Drop file here or click to upload') }}
                                </span>
                                <input name="file" type="file" class="drop-zone__input" accept=".json">
                            </div>

                            <!-- File Input Error -->
                            @error('file')
                                <p class="text-danger m-0">{{ $message }}</p>
                            @enderror

                            <!-- Submit Button -->
                            <div id="galler" style="display: none">
                                <button type="submit" class="btn btn-primary btn-lg mt-4 py-2 px-4">
                                    {{ __('Update Language JSON') }}
                                    <i class="fa-solid fa-upload ml-2"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="card h-100 shadow border-0  rounded-lg export-card">
                    <div class="card-body text-center">
                        <div class="icon-container mb-3">
                            <i class="fa-solid fa-file-code fa-3x text-primary"></i>
                        </div>
                        <h4 class="text-dark mb-3 font-weight-bold">
                            {{ __('Export JSON File') }}
                        </h4>
                        <p class="text-muted">
                            Export your language files in JSON format with just one click!
                        </p>
                        <form action="{{ route('admin.language.export', $language->id) }}" method="POST">
                            @csrf
                            <button type="submit" class="btn btn-primary btn-lg mt-4 export-btn py-2 px-4">
                                {{ __('Export') }}
                                <i class="fa-solid fa-cloud-arrow-down ml-2"></i>
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>

        <div class="card border-0 shadow-sm rounded-12 mb-3">
            <div class="card-header py-2.5">
                <h4 class="m-0">
                    {{ $language->name }}.json (file content)
                </h4>
            </div>
            <div class="card-body p-3">
                <div class="mb-2">
                    <input type="text" class="form-control" placeholder="Search in JSON" id="search" onkeyup="filterJSON()" />
                </div>
                <div class="json-view-container">
                    @foreach ($languageData as $key => $value)
                        <div class="json-item">
                            <span class="json-key">"{{ $key }}":</span>
                            <span class="json-value">{{ is_null($value) ? 'null' : '"' . $value . '"' }}</span>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>


    </div>
@endsection

@push('css')
    <style>
        .export-card {
            background-color: #f8f9fa;
            transition: transform 0.3s, box-shadow 0.3s;
            padding: 20px;
            border-radius: 15px;
        }

        .export-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .icon-container {
            background-color: #e7f3ff;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
        }

        h4 {
            color: #343a40;
        }

        .export-btn {
            display: inline-block;
            border-radius: 8px;
            transition: background-color 0.3s, box-shadow 0.3s;
        }

        .export-btn i {
            margin-left: 10px;
        }

        p {
            font-size: 14px;
            color: #6c757d;
        }

        .import-card {
            background-color: #f8f9fa;
            padding: 25px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-radius: 15px;
        }

        .import-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .json-view-container {
            background-color: #2d2d2d;
            color: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            overflow-y: auto;
            max-height: 600px;
        }

        .json-item {
            padding: 8px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            font-size: 14px;
        }

        .json-item:last-child {
            border-bottom: none;
        }

        .json-key {
            color: #66d9ef;
            font-weight: bold;
        }

        .json-value {
            color: #a6e22e;
        }

        .highlight {
            background-color: yellow;
            /* Highlight color */
            font-weight: bold;
            /* Make it bold */
        }
    </style>
@endpush

@push('scripts')
    <script src="{{ asset('assets/scripts/drop-zone.js') }}"></script>
    <script>
        $('input[name="file"]').change(function() {
            $('#galler').css('display', 'block');
        });

        function selectFolder(button, name) {
            var gallery = $('#bulkForm');

            var input = $('#input' + name);

            if (input.length) {
                input.remove();
                $(button).removeClass('active');
            } else {
                var element = document.createElement('input');
                element.type = 'hidden';
                element.name = 'folder[' + name + ']';
                element.value = name;
                element.id = 'input' + name;
                gallery.append(element);

                $(button).addClass('active');
            }
        }

        function submitForm() {
            $('#galleryModal').modal('hide');

            $('#bulkForm').submit();
        }
    </script>

    @if (session('successAlert'))
        <script>
            Swal.fire({
                icon: 'success',
                title: 'Language Import Successful',
                text: "{{ session('successAlert') }}"
            });
        </script>
    @endif

    <script>
        let debounceTimer;

        function filterJSON() {
            clearTimeout(debounceTimer); // Clear the previous timer

            debounceTimer = setTimeout(() => {
                const searchInput = document.getElementById('search').value.toLowerCase();
                const jsonItems = document.querySelectorAll('.json-item');

                jsonItems.forEach(item => {
                    const key = item.querySelector('.json-key').innerText.toLowerCase();
                    const value = item.querySelector('.json-value').innerText.toLowerCase();
                    const keyElement = item.querySelector('.json-key');
                    const valueElement = item.querySelector('.json-value');

                    // Reset highlighting
                    keyElement.innerHTML = key; // Reset to original key
                    valueElement.innerHTML = value; // Reset to original value

                    // Check if the key or value includes the search string
                    let isMatch = false;
                    if (key.includes(searchInput) || value.includes(searchInput)) {
                        // Highlight matching text
                        if (key.includes(searchInput)) {
                            keyElement.innerHTML = key.replace(new RegExp(`(${searchInput})`, 'gi'), '<span class="highlight">$1</span>');
                            isMatch = true;
                        }
                        if (value.includes(searchInput)) {
                            valueElement.innerHTML = value.replace(new RegExp(`(${searchInput})`, 'gi'), '<span class="highlight">$1</span>');
                            isMatch = true;
                        }

                        item.style.display = 'flex'; // Show item
                    } else {
                        item.style.display = 'flex'; // Show all items
                    }
                });

                // Scroll to the first matching item
                const firstMatch = [...jsonItems].find(item => {
                    const key = item.querySelector('.json-key').innerText.toLowerCase();
                    const value = item.querySelector('.json-value').innerText.toLowerCase();
                    return key.includes(searchInput) || value.includes(searchInput);
                });

                if (firstMatch) {
                    firstMatch.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }, 300); // Delay in milliseconds
        }
    </script>

@endpush
