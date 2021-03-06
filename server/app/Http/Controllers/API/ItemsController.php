<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Item;
use Illuminate\Http\Request;

class ItemsController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['index']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Item::all();
    }

    /**
     * Display a listing of the resource.
     *
     * @param  int  $items
     * @return \Illuminate\Http\Response
     */
    public function list($items = 10)
    {
        //
        return Item::withTrashed()->paginate((int) $items);
    }

    /**
     * Display a listing of the resource only Deleted.
     *
     * @return \Illuminate\Http\Response
     */
    public function deleted()
    {
        //
        return Item::onlyTrashed()->get();
    }

    /**
     * Display a listing of the resource with Deleted.
     *
     * @return \Illuminate\Http\Response
     */
    public function withDeleted()
    {
        //
        return Item::withTrashed()->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate
        $request->validate([
            'title' => 'required'
        ]);

        //
        return Item::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return Item::withTrashed()->find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $item = Item::withTrashed()->find($id);
        $item->update($request->all());
        return $item;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        return Item::destroy($id);
    }

    /**
     * Disable the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function hardDestroy($id)
    {
        //
        $item = Item::onlyTrashed()->find($id);

        if (!is_null($item)) {
            return $item->forceDelete();
        }

        return $item;
    }

    /**
     * Restore the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function restore($id)
    {
        //
        $item = Item::onlyTrashed()->find($id);

        if (!is_null($item)) {
            return $item->restore();
        }

        return $item;
    }
}
