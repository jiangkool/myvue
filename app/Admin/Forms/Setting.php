<?php

namespace App\Admin\Forms;

use Encore\Admin\Widgets\Form;
use Illuminate\Http\Request;

class Setting extends Form
{
    /**
     * The form title.
     *
     * @var string
     */
    public $title = '网站设置';

    /**
     * Handle the form request.
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request)
    {
        //dd($request->all());
        $data=$request->all();
        foreach ($data as $key=>$val) {
            \App\Models\Setting::updateOrCreate(['key'=>$key],['key'=>$key,'value'=>$val]);
        }
        admin_success('Processed successfully.');

        return back();
    }

    /**
     * Build a form here.
     */
    public function form()
    {
        $this->text('name')->rules('required');
        $this->email('email')->rules('email')->rules('required');
        $this->select('sex')->options([1=>'男',2=>'女'])->rules('required');
        $this->datetime('created_at')->rules('required');
    }

    /**
     * The data of the form.
     *
     * @return array $data
     */
    public function data()
    {
        $data=\App\Models\Setting::get(['key','value']);
        $arr=[];
        foreach ($data as $item) {
            $arr[$item->key]=$item->value;
        }
       // dd($arr);
        return $arr;
    }
}
