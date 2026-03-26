import Map "mo:core/Map";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Iter "mo:core/Iter";

actor {
  type Submission = {
    name : Text;
    email : Text;
    phone : Text;
    projectType : Text;
    message : Text;
  };

  module Submission {
    public func compare(a : Submission, b : Submission) : Order.Order {
      switch (Text.compare(a.name, b.name)) {
        case (#equal) { Text.compare(a.email, b.email) };
        case (order) { order };
      };
    };
  };

  // Store submissions
  let submissions = Map.empty<Principal, Submission>();

  // Hardcoded admin principal (replace with actual admin principal)
  let admin = Principal.fromText("2vxsx-fae");

  public shared ({ caller }) func submitForm(name : Text, email : Text, phone : Text, projectType : Text, message : Text) : async () {
    let submission : Submission = {
      name;
      email;
      phone;
      projectType;
      message;
    };
    if (submissions.containsKey(caller)) { Runtime.trap("This user already submitted a form") };
    submissions.add(caller, submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    if (caller != admin) { Runtime.trap("Access denied: Only admin can view submissions") };
    submissions.values().toArray().sort();
  };
};
