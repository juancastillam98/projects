<?php

namespace App\Http\Controllers;

use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactoMailable;
use Illuminate\Support\Facades\Storage;

class WebController extends Controller
{

    public function sendMail(Request $request)
    {
        $data = [
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'phone' => $request->input('phone'),
            'subject' => $request->input('subject'),
            'message' => $request->input('message'),
        ];

        Mail::to('contact@johndev.dev')->send(new ContactoMailable($data));

        // Realiza cualquier acción adicional después de enviar el correo

        return redirect()->back()->with('success', 'Mail sent successfully!');
    }
    public function convertToWebp()
    {
        $images = Storage::allFiles("public/images/");

        foreach ($images as $img) {
            $extension = pathinfo($img, PATHINFO_EXTENSION);
            if ($extension !== "avif") {

                $imagePath = storage_path('app/' . $img);
                $image = imagecreatefromstring(file_get_contents($imagePath));

                // Crea una nueva imagen en formato webp
                $webpPath = str_replace($extension, 'avif', $imagePath);
                imagejpeg($image, $webpPath, 100);
                unlink($imagePath);
            }
            //array_push($photos, $extension);
        }
        return redirect()->route('welcome');
        /*         return view("pruebas", [
            "images" => $webpPath
        ]); */
    }
    /*
    $images = Storage::allFiles("public/images/");

        foreach ($images as $img) {
            $extension = pathinfo($img, PATHINFO_EXTENSION);

            if ($extension !== 'webp') {
                // Carga la imagen original
                $image = Image::make(storage_path('app/' . $img));

                // Convierte la imagen a formato webp y reemplaza la imagen original
                $image->encode('webp')->save(storage_path('app/' . $img));
            }
            }
        }

    return view("pruebas", [
        "images" => $convertedImages
    ]);*/

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
