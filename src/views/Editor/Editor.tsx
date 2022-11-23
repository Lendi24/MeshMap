import React, { Component } from 'react';

import Icon, { Stack } from '@mdi/react';
import { mdiAccount } from '@mdi/js';

import { Outlet, Link } from "react-router-dom";
import './Editor.css'

export default function Editor() {
  return (
    <div className="flex flex-col h-screen m-0 z-1 overflow-y-hidden">
    
        <nav className="flex flex-row space-x-1 z-30" id="top-bar">
            <span className="mdi mdi-brush ml-3"></span>
            <div id="dropdowns"></div>
            <span id="lock" className="mdi mdi-lock-open-variant absolute right-0"></span>
        </nav>

        <div className="flex flex-grow m-0 overflow-hidden bg-green-600 justify-between">
            <div className="bg-gray-600 z-20 bg-opacity-60 bg-blur-sm background-blur">{/*<!--Tools-->*/}
                <div className="space-y-3" id="tool-section">
                    <span title="Brush (B)" className="text-white border-2 rounded hover:bg-green-700 hover:scale-110 transform transition-all mdi mdi-brush w-10" >
                        <Icon path={mdiAccount}></Icon>
                    </span>

                    <Icon title="Brush (B)" path={mdiAccount} className="text-white border-2 rounded hover:bg-green-700 hover:scale-110 transform transition-all mdi mdi-brush w-10"></Icon>
                    <Icon title="Brush (B)" path={mdiAccount} className="text-white border-2 rounded hover:bg-green-700 hover:scale-110 transform transition-all mdi mdi-brush w-10"></Icon>
                    <Icon title="Brush (B)" path={mdiAccount} className="text-white border-2 rounded hover:bg-green-700 hover:scale-110 transform transition-all mdi mdi-brush w-10"></Icon>
                </div>
            </div> {/*<!--Tools-->*/}
            <div className="w-full h-full m-0 flex justify-center items-center">
                <canvas id="drawing-area" className="z-10"></canvas>
            </div>
            <div className="w-60 bg-gray-600 z-20 bg-opacity-60 bg-blur-sm background-blur" id="side-section">
                <div className="" id="side-section-color"> {/*<!--Colour picker-->*/}
                {/*
                    <label for="red">Red</label>
                    <input id="red-range" className="color-input w-full" name="red" type="range" min="0" max="255" placeholder="0" value="255">
                    <label for="green">Green</label>
                    <input id="green-range" className="color-input w-full" name="green" type="range" min="0" max="255" placeholder="0" value="255">
                    <label for="blue">Blue</label>
                    <input id="blue-range" className="color-input w-full" name="blue" type="range" min="0" max="255" placeholder="0" value="255">
                    <label for="alpha">Alpha</label>
                    <input id="alph-rRange" className="color-input w-full" name="alpha" type="range" min="0" max="255" placeholder="0" value="255">
                    <div id="color-display-container"><div id="color-display" className="w-full h-10"></div></div>
                */}
                </div>
                
                <div className="min-w-5" > {/*<!--Tool settings-->*/}</div>

                <div className=""  id="side-section-layer"> {/*<!--Layers-->*/}
                
                </div>
            </div>
        </div>
        <div className="h-6 flex justify-between z-30">
            <b className="ml-1 mr-1">Pos: X: <b id="posX">0</b>, Y: <b id="posY">0</b></b>
            {/*<!--
            <b className="ml-1 mr-1">Layer Size: 0 x 0</b>
            -->*/}
            <b className="ml-1 mr-1">Zoom: <b id="zoom">100</b>%</b>
        </div>

        <div id = "window-cont">
            <div id = "window-model"></div>
        </div>
    </div>
  );
}

