import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface DateRecord { 'date' : bigint, 'ccids' : Array<string> }
export interface _SERVICE {
  'add_hash' : ActorMethod<[string], string>,
  'format_date' : ActorMethod<[bigint], string>,
  'get_all_data' : ActorMethod<[], Array<DateRecord>>,
  'get_date_data' : ActorMethod<[bigint], [] | [DateRecord]>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
