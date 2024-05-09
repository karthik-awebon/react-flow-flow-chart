import { MarkerType } from 'reactflow';
import DefaultEdge from './edges/DefaultEdge';
import AssignValues from './nodes/AssignValues';
import CallApi from './nodes/CallApi';
import Database from './nodes/Database';
import Decision from './nodes/Decision';
import Listener from './nodes/Listener';
import Scripting from './nodes/Scripting';
import SubProcess from './nodes/SubProcess';

export const initialNodes = [
    {
        id: '1',
        data: {},
        position: { x: 10, y: 100 },
        type: 'listener',
    },
    {
        id: '2',
        data: {},
        position: { x: 10, y: 200 },
        type: 'subprocess',
    },
    {
        id: '3',
        data: {},
        position: { x: 10, y: 300 },
        type: 'database',
    },
    {
        id: '4',
        data: {},
        position: { x: 10, y: 400 },
        type: 'decision',
    },
    {
        id: '5',
        data: {},
        position: { x: 10, y: 500 },
        type: 'callapi',
    },
    {
        id: '6',
        data: {},
        position: { x: 10, y: 600 },
        type: 'scripting',
    },
    {
        id: '7',
        data: {},
        position: { x: 10, y: 700 },
        type: 'assignvalues',
    },
    // {
    //     id: '8',
    //     data: {},
    //     position: { x: window.innerWidth / 2 - 50, y: 100 },
    //     type: 'listener',
    // },
    // {
    //     id: '9',
    //     data: {},
    //     position: { x: window.innerWidth / 2 - 50, y: 200 },
    //     type: 'database',
    // },
    // {
    //     id: '10',
    //     data: {},
    //     position: { x: window.innerWidth / 2 - 50, y: 300 },
    //     type: 'subprocess',
    // },
    // {
    //     id: '11',
    //     data: {},
    //     position: { x: window.innerWidth / 2 - 32, y: 400 },
    //     type: 'decision',
    // },
    // {
    //     id: '12',
    //     data: {},
    //     position: { x: window.innerWidth / 4, y: 500 },
    //     type: 'assignvalues',
    // },
    // {
    //     id: '13',
    //     data: {},
    //     position: { x: 3 * (window.innerWidth / 4) - 25, y: 500 },
    //     type: 'assignvalues',
    // },
    // {
    //     id: '14',
    //     data: {},
    //     position: { x: window.innerWidth / 2 - 25, y: 700 },
    //     type: 'scripting',
    // },


];

export const initialEdges = [
    // {
    //     id: 'e1-2',
    //     source: '8',
    //     target: '9',
    //     type: 'defaultedge',
    //     markerEnd: {
    //         type: MarkerType.ArrowClosed,
    //         width: 25,
    //         height: 15,
    //         color: 'black',
    //     },
    // },
    // {
    //     id: 'e2-3',
    //     source: '9',
    //     target: '10',
    //     type: 'defaultedge',
    //     markerEnd: {
    //         type: MarkerType.ArrowClosed,
    //         width: 25,
    //         height: 15,
    //         color: 'black',
    //     },
    // },
    // {
    //     id: 'e3-4',
    //     source: '10',
    //     target: '11',
    //     type: 'defaultedge',
    //     markerEnd: {
    //         type: MarkerType.ArrowClosed,
    //         width: 25,
    //         height: 15,
    //         color: 'black',
    //     },
    // },
    // {
    //     id: 'e4-5',
    //     source: '11',
    //     sourceHandle: 'a',
    //     target: '12',
    //     type: 'step',
    //     markerEnd: {
    //         type: MarkerType.ArrowClosed,
    //         width: 25,
    //         height: 15,
    //         color: '#018a0e',
    //     },
    //     style: {
    //         strokeWidth: 2,
    //         stroke: '#018a0e',
    //     },
    //     label: 'yes',
    //     labelStyle: {
    //         fontSize: 15,
    //     }
    // },
    // {
    //     id: 'e4-6',
    //     source: '11',
    //     sourceHandle: 'b',
    //     target: '13',
    //     type: 'step',
    //     markerEnd: {
    //         type: MarkerType.ArrowClosed,
    //         width: 25,
    //         height: 15,
    //         color: '#e91514',
    //     },
    //     style: {
    //         strokeWidth: 2,
    //         stroke: '#e91514',
    //     },
    //     label: 'no',
    //     labelStyle: {
    //         fontSize: 15,
    //     }
    // },
    // {
    //     id: 'e5-7',
    //     source: '12',
    //     target: '14',
    //     targetHandle: 'b',
    //     type: 'step',
    //     markerEnd: {
    //         type: MarkerType.ArrowClosed,
    //         width: 25,
    //         height: 15,
    //         color: '#ff8ee2',
    //     },
    //     style: {
    //         strokeWidth: 2,
    //         stroke: '#ff8ee2',
    //     },
    // },
    // {
    //     id: 'e6-7',
    //     source: '13',
    //     target: '14',
    //     targetHandle: 'a',
    //     type: 'step',
    //     markerEnd: {
    //         type: MarkerType.ArrowClosed,
    //         width: 25,
    //         height: 15,
    //         color: '#ff8ee2',
    //     },
    //     style: {
    //         strokeWidth: 2,
    //         stroke: '#ff8ee2',
    //     },
    // },
];

export const nodeTypes = {
    listener: Listener,
    subprocess: SubProcess,
    database: Database,
    decision: Decision,
    callapi: CallApi,
    scripting: Scripting,
    assignvalues: AssignValues,
};
export const edgeTypes = {
    defaultedge: DefaultEdge,
};