import {getElement, LensState, setJsonForFlux} from "@focuson/state";
import * as React from 'react'
import ReactDOM from 'react-dom';
import {emptyGame, GameData, SimpleGame} from "./game";


let rootElement = getElement("root");

let setJson = setJsonForFlux<GameData, void>('game', (s: LensState<GameData, GameData>): void =>
    ReactDOM.render(<SimpleGame state={s}/>, rootElement))

setJson(emptyGame)