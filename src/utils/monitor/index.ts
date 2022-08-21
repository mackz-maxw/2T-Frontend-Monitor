import { injectJsError } from "./lib/jsError";
import { proxyXHR } from "./lib/xhr";
import { blankScreen } from "./lib/blankScreen";
import { timing } from "./lib/timing";
import { longTask } from "./lib/longTask";
import { pv } from "./lib/pv";
import {proxyFetch} from './lib/proxyFetch'
import {resource} from './lib/resource'


export function useMonitor(){
    injectJsError();
    proxyXHR();
    proxyFetch();
    // injectFetch();
    blankScreen();
    timing();
    pv();
    longTask();
    resource();
}
// useMonitor();