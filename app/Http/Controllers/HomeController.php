<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\EcosystemContact;
use App\Models\Subscriber;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * 订阅更新
     */
    public function subscribe(Request $request): \Illuminate\Http\JsonResponse
    {
        $validated = $request->validate([
            'email' => 'required|email|max:255',
        ]);

        Subscriber::updateOrCreate(
            ['email' => $validated['email']],
            [
                'ip' => $request->ip(),
                'is_active' => true,
            ]
        );

        return ok();
    }

    /**
     * 生态合作联系表单提交
     */
    public function ecosystemContact(Request $request): \Illuminate\Http\JsonResponse
    {
        $validated = $request->validate([
            'company' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'position' => 'nullable|string|max:255',
            'email' => 'required|email|max:255',
            'category' => 'required|string|in:research,business,tech,capital,other',
            'description' => 'required|string|max:2000',
        ]);

        EcosystemContact::create([
            ...$validated,
            'ip' => $request->ip(),
        ]);

        return ok();
    }

    /**
     * 联系我们表单提交
     */
    public function contact(Request $request): \Illuminate\Http\JsonResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'company' => 'nullable|string|max:255',
            'category' => 'required|string|in:investment,partnership,media,support,other',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:2000',
        ]);

        $filePath = null;
        if ($request->hasFile('file')) {
            $filePath = $request->file('file')->store('contacts', 'public');
        }

        Contact::create([
            ...$validated,
            'file' => $filePath,
            'ip' => $request->ip(),
        ]);

        return ok();
    }

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
