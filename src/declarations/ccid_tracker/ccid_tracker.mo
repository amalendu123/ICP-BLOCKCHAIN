// This is a generated Motoko binding.
// Please use `import service "ic:canister_id"` instead to call canisters on the IC if possible.

module {
  public type DateRecord = { date : Int64; ccids : [Text] };
  public type Self = actor {
    add_hash : shared Text -> async Text;
    format_date : shared Int -> async Text;
    get_all_data : shared () -> async [DateRecord];
    get_date_data : shared Int64 -> async ?DateRecord;
  }
}
