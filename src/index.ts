/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * DON'T REMOVE - required for ts-node-dev not to quit
 *  */
import { keeper } from './keeper'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

dayjs.extend(duration)

import {WsService} from './socket.service'

const { log } = console

keeper()
/** links */
// ramda - https://ramdajs.com/docs/
// closure compiler - https://closure-compiler.appspot.com/home

WsService.instance('http://localhost:8080')
const d = '10/01/2020'
const n = dayjs(new Date())
log(dayjs(d, 'MM/DD/YYYY').toString())
log(n.toString())
log(dayjs.duration(n.diff(d)).asDays())
