export const idlFactory = ({ IDL }) => {
  const DateRecord = IDL.Record({
    'date' : IDL.Int64,
    'ccids' : IDL.Vec(IDL.Text),
  });
  return IDL.Service({
    'add_hash' : IDL.Func([IDL.Text], [IDL.Text], []),
    'format_date' : IDL.Func([IDL.Int], [IDL.Text], []),
    'get_all_data' : IDL.Func([], [IDL.Vec(DateRecord)], []),
    'get_date_data' : IDL.Func([IDL.Int64], [IDL.Opt(DateRecord)], []),
  });
};
export const init = ({ IDL }) => { return []; };
