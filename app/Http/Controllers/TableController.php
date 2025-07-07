<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Table;

class TableController extends Controller
{
    public function index()
    {
        $tableNumber = request()->route('table');

        $table = Table::whereQrCode(url("table/$tableNumber"))->firstOrFail();
        $products = Product::with('media')->get();


        return inertia('table/index', [
            'table' => $table,
            'products' => $products,
            'tableNumber' => $tableNumber,
        ]);
    }
}
