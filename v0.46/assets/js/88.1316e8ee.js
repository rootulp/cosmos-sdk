(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{640:function(e,s,a){"use strict";a.r(s);var t=a(1),o=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-028-public-key-addresses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-028-public-key-addresses"}},[e._v("#")]),e._v(" ADR 028: Public Key Addresses")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("2020/08/18: Initial version")]),e._v(" "),a("li",[e._v("2021/01/15: Analysis and algorithm update")])]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Proposed")]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("This ADR defines an address format for all addressable Cosmos SDK accounts. That includes: new public key algorithms, multisig public keys, and module accounts.")]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("Issue "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/3685",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3685"),a("OutboundLink")],1),e._v(" identified that public key\naddress spaces are currently overlapping. We confirmed that it significantly decreases security of Cosmos SDK.")]),e._v(" "),a("h3",{attrs:{id:"problem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problem"}},[e._v("#")]),e._v(" Problem")]),e._v(" "),a("p",[e._v("An attacker can control an input for an address generation function. This leads to a birthday attack, which significantly decreases the security space.\nTo overcome this, we need to separate the inputs for different kind of account types:\na security break of one account type shouldn't impact the security of other account types.")]),e._v(" "),a("h3",{attrs:{id:"initial-proposals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initial-proposals"}},[e._v("#")]),e._v(" Initial proposals")]),e._v(" "),a("p",[e._v("One initial proposal was extending the address length and\nadding prefixes for different types of addresses.")]),e._v(" "),a("p",[e._v("@ethanfrey explained an alternate approach originally used in https://github.com/iov-one/weave:")]),e._v(" "),a("blockquote",[a("p",[e._v("I spent quite a bit of time thinking about this issue while building weave... The other cosmos Sdk.\nBasically I define a condition to be a type and format as human readable string with some binary data appended. This condition is hashed into an Address (again at 20 bytes). The use of this prefix makes it impossible to find a preimage for a given address with a different condition (eg ed25519 vs secp256k1).\nThis is explained in depth here https://weave.readthedocs.io/en/latest/design/permissions.html\nAnd the code is here, look mainly at the top where we process conditions. https://github.com/iov-one/weave/blob/master/conditions.go")])]),e._v(" "),a("p",[e._v("And explained how this approach should be sufficiently collision resistant:")]),e._v(" "),a("blockquote",[a("p",[e._v("Yeah, AFAIK, 20 bytes should be collision resistance when the preimages are unique and not malleable. A space of 2^160 would expect some collision to be likely around 2^80 elements (birthday paradox). And if you want to find a collision for some existing element in the database, it is still 2^160. 2^80 only is if all these elements are written to state.\nThe good example you brought up was eg. a public key bytes being a valid public key on two algorithms supported by the codec. Meaning if either was broken, you would break accounts even if they were secured with the safer variant. This is only as the issue when no differentiating type info is present in the preimage (before hashing into an address).\nI would like to hear an argument if the 20 bytes space is an actual issue for security, as I would be happy to increase my address sizes in weave. I just figured cosmos and ethereum and bitcoin all use 20 bytes, it should be good enough. And the arguments above which made me feel it was secure. But I have not done a deeper analysis.")])]),e._v(" "),a("p",[e._v("This led to the first proposal (which we proved to be not good enough):\nwe concatenate a key type with a public key, hash it and take the first 20 bytes of that hash, summarized as "),a("code",[e._v("sha256(keyTypePrefix || keybytes)[:20]")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"review-and-discussions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#review-and-discussions"}},[e._v("#")]),e._v(" Review and Discussions")]),e._v(" "),a("p",[e._v("In "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/issues/5694",target:"_blank",rel:"noopener noreferrer"}},[e._v("#5694"),a("OutboundLink")],1),e._v(" we discussed various solutions.\nWe agreed that 20 bytes it's not future proof, and extending the address length is the only way to allow addresses of different types, various signature types, etc.\nThis disqualifies the initial proposal.")]),e._v(" "),a("p",[e._v("In the issue we discussed various modifications:")]),e._v(" "),a("ul",[a("li",[e._v("Choice of the hash function.")]),e._v(" "),a("li",[e._v("Move the prefix out of the hash function: "),a("code",[e._v("keyTypePrefix + sha256(keybytes)[:20]")]),e._v(" [post-hash-prefix-proposal].")]),e._v(" "),a("li",[e._v("Use double hashing: "),a("code",[e._v("sha256(keyTypePrefix + sha256(keybytes)[:20])")]),e._v(".")]),e._v(" "),a("li",[e._v("Increase to keybytes hash slice from 20 byte to 32 or 40 bytes. We concluded that 32 bytes, produced by a good hash functions is future secure.")])]),e._v(" "),a("h3",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("ul",[a("li",[e._v("Support currently used tools - we don't want to break an ecosystem, or add a long adaptation period. Ref: https://github.com/cosmos/cosmos-sdk/issues/8041")]),e._v(" "),a("li",[e._v("Try to keep the address length small - addresses are widely used in state, both as part of a key and object value.")])]),e._v(" "),a("h3",{attrs:{id:"scope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scope"}},[e._v("#")]),e._v(" Scope")]),e._v(" "),a("p",[e._v("This ADR only defines a process for the generation of address bytes. For end-user interactions with addresses (through the API, or CLI, etc.), we still use bech32 to format these addresses as strings. This ADR doesn't change that.\nUsing Bech32 for string encoding gives us support for checksum error codes and handling of user typos.")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v("We define the following account types, for which we define the address function:")]),e._v(" "),a("ol",[a("li",[e._v("simple accounts: represented by a regular public key (ie: secp256k1, sr25519)")]),e._v(" "),a("li",[e._v("naive multisig: accounts composed by other addressable objects (ie: naive multisig)")]),e._v(" "),a("li",[e._v("composed accounts with a native address key (ie: bls, group module accounts)")]),e._v(" "),a("li",[e._v("module accounts: basically any accounts which cannot sign transactions and which are managed internally by modules")])]),e._v(" "),a("h3",{attrs:{id:"legacy-public-key-addresses-don-t-change"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#legacy-public-key-addresses-don-t-change"}},[e._v("#")]),e._v(" Legacy Public Key Addresses Don't Change")]),e._v(" "),a("p",[e._v("Currently (Jan 2021), the only officially supported Cosmos SDK user accounts are "),a("code",[e._v("secp256k1")]),e._v(" basic accounts and legacy amino multisig.\nThey are used in existing Cosmos SDK zones. They use the following address formats:")]),e._v(" "),a("ul",[a("li",[e._v("secp256k1: "),a("code",[e._v("ripemd160(sha256(pk_bytes))[:20]")])]),e._v(" "),a("li",[e._v("legacy amino multisig: "),a("code",[e._v("sha256(aminoCdc.Marshal(pk))[:20]")])])]),e._v(" "),a("p",[e._v("We don't want to change existing addresses. So the addresses for these two key types will remain the same.")]),e._v(" "),a("p",[e._v('The current multisig public keys use amino serialization to generate the address. We will retain\nthose public keys and their address formatting, and call them "legacy amino" multisig public keys\nin protobuf. We will also create multisig public keys without amino addresses to be described below.')]),e._v(" "),a("h3",{attrs:{id:"hash-function-choice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash-function-choice"}},[e._v("#")]),e._v(" Hash Function Choice")]),e._v(" "),a("p",[e._v("As in other parts of the Cosmos SDK, we will use "),a("code",[e._v("sha256")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"basic-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-address"}},[e._v("#")]),e._v(" Basic Address")]),e._v(" "),a("p",[e._v("We start with defining a base hash algorithm for generating addresses. Notably, it's used for accounts represented by a single key pair. For each public key schema we have to have an associated "),a("code",[e._v("typ")]),e._v(" string, which we discuss in a section below. "),a("code",[e._v("hash")]),e._v(" is the cryptographic hash function defined in the previous section.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29uc3QgQV9MRU4gPSAzMgoKZnVuYyBIYXNoKHR5cCBzdHJpbmcsIGtleSBbXWJ5dGUpIFtdYnl0ZSB7CiAgICByZXR1cm4gaGFzaChoYXNoKHR5cCkgKyBrZXkpWzpBX0xFTl0KfQo="}}),e._v(" "),a("p",[e._v("The "),a("code",[e._v("+")]),e._v(" is bytes concatenation, which doesn't use any separator.")]),e._v(" "),a("p",[e._v("This algorithm is the outcome of a consultation session with a professional cryptographer.\nMotivation: this algorithm keeps the address relatively small (length of the "),a("code",[e._v("typ")]),e._v(" doesn't impact the length of the final address)\nand it's more secure than [post-hash-prefix-proposal] (which uses the first 20 bytes of a pubkey hash, significantly reducing the address space).\nMoreover the cryptographer motivated the choice of adding "),a("code",[e._v("typ")]),e._v(" in the hash to protect against a switch table attack.")]),e._v(" "),a("p",[e._v("We use the "),a("code",[e._v("address.Hash")]),e._v(" function for generating addresses for all accounts represented by a single key:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("simple public keys: "),a("code",[e._v("address.Hash(keyType, pubkey)")])])]),e._v(" "),a("li",[a("p",[e._v("aggregated keys (eg: BLS): "),a("code",[e._v("address.Hash(keyType, aggregatedPubKey)")])])]),e._v(" "),a("li",[a("p",[e._v("modules: "),a("code",[e._v('address.Hash("module", moduleName)')])])])]),e._v(" "),a("h3",{attrs:{id:"composed-addresses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#composed-addresses"}},[e._v("#")]),e._v(" Composed Addresses")]),e._v(" "),a("p",[e._v("For simple composed accounts (like new naive multisig), we generalize the "),a("code",[e._v("address.Hash")]),e._v(". The address is constructed by recursively creating addresses for the sub accounts, sorting the addresses and composing them into a single address. It ensures that the ordering of keys doesn't impact the resulting address.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gV2UgZG9uJ3QgbmVlZCBhIFB1YktleSBpbnRlcmZhY2UgLSB3ZSBuZWVkIGFueXRoaW5nIHdoaWNoIGlzIGFkZHJlc3NhYmxlLgp0eXBlIEFkZHJlc3NhYmxlIGludGVyZmFjZSB7CiAgICBBZGRyZXNzKCkgW11ieXRlCn0KCmZ1bmMgQ29tcG9zZWQodHlwIHN0cmluZywgc3ViYWNjb3VudHMgW11BZGRyZXNzYWJsZSkgW11ieXRlIHsKICAgIGFkZHJlc3NlcyA9IG1hcChzdWJhY2NvdW50cywgXGEgLSZndDsgTGVuZ3RoUHJlZml4KGEuQWRkcmVzcygpKSkKICAgIGFkZHJlc3NlcyA9IHNvcnQoYWRkcmVzc2VzKQogICAgcmV0dXJuIGFkZHJlc3MuSGFzaCh0eXAsIGFkZHJlc3Nlc1swXSArIC4uLiArIGFkZHJlc3Nlc1tuXSkKfQo="}}),e._v(" "),a("p",[e._v("The "),a("code",[e._v("typ")]),e._v(" parameter should be a schema descriptor, containing all significant attributes with deterministic serialization (eg: utf8 string).\n"),a("code",[e._v("LengthPrefix")]),e._v(" is a function which prepends 1 byte to the address. The value of that byte is the length of the address bits before prepending. The address must be at most 255 bits long.\nWe are using "),a("code",[e._v("LengthPrefix")]),e._v(" to eliminate conflicts - it assures, that for 2 lists of addresses: "),a("code",[e._v("as = {a1, a2, ..., an}")]),e._v(" and "),a("code",[e._v("bs = {b1, b2, ..., bm}")]),e._v(" such that every "),a("code",[e._v("bi")]),e._v(" and "),a("code",[e._v("ai")]),e._v(" is at most 255 long, "),a("code",[e._v("concatenate(map(as, \\a -> LengthPrefix(a))) = map(bs, \\b -> LengthPrefix(b))")]),e._v(" iff "),a("code",[e._v("as = bs")]),e._v(".")]),e._v(" "),a("p",[e._v("Implementation Tip: account implementations should cache addresses.")]),e._v(" "),a("h4",{attrs:{id:"multisig-addresses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multisig-addresses"}},[e._v("#")]),e._v(" Multisig Addresses")]),e._v(" "),a("p",[e._v("For new multisig public keys, we define the "),a("code",[e._v("typ")]),e._v(" parameter not based on any encoding scheme (amino or protobuf). This avoids issues with non-determinism in the encoding scheme.")]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"cGFja2FnZSBjb3Ntb3MuY3J5cHRvLm11bHRpc2lnOwoKbWVzc2FnZSBQdWJLZXkgewogIHVpbnQzMiB0aHJlc2hvbGQgPSAxOwogIHJlcGVhdGVkIGdvb2dsZS5wcm90b2J1Zi5BbnkgcHVia2V5cyA9IDI7Cn0K"}}),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAobXVsdGlzaWcgUHViS2V5KSBBZGRyZXNzKCkgewogIC8vIGZpcnN0IGdhdGhlciBhbGwgbmVzdGVkIHB1YiBrZXlzCiAgdmFyIGtleXMgW11hZGRyZXNzLkFkZHJlc3NhYmxlICAvLyBjcnlwdG90eXBlcy5QdWJLZXkgaW1wbGVtZW50cyBBZGRyZXNzYWJsZQogIGZvciBfLCBfa2V5IDo9IHJhbmdlIG11bHRpc2lnLlB1YmtleXMgewogICAga2V5cyA9IGFwcGVuZChrZXlzLCBrZXkuR2V0Q2FjaGVkVmFsdWUoKS4oY3J5cHRvdHlwZXMuUHViS2V5KSkKICB9CgogIC8vIGZvcm0gdGhlIHR5cGUgZnJvbSB0aGUgbWVzc2FnZSBuYW1lIChjb3Ntb3MuY3J5cHRvLm11bHRpc2lnLlB1YktleSkgYW5kIHRoZSB0aHJlc2hvbGQgam9pbmVkIHRvZ2V0aGVyCiAgcHJlZml4IDo9IGZtdC5TcHJpbnRmKCZxdW90OyVzLyVkJnF1b3Q7LCBwcm90by5NZXNzYWdlTmFtZShtdWx0aXNpZyksIG11bHRpc2lnLlRocmVzaG9sZCkKCiAgLy8gdXNlIHRoZSBDb21wb3NlZCBmdW5jdGlvbiBkZWZpbmVkIGFib3ZlCiAgcmV0dXJuIGFkZHJlc3MuQ29tcG9zZWQocHJlZml4LCBrZXlzKQp9Cg=="}}),e._v(" "),a("h4",{attrs:{id:"module-account-addresses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-account-addresses"}},[e._v("#")]),e._v(" Module Account Addresses")]),e._v(" "),a("p",[e._v("NOTE: this section is not finalize and it's in active discussion.")]),e._v(" "),a("p",[e._v("In Basic Address section we defined a module account address as:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"YWRkcmVzcy5IYXNoKCZxdW90O21vZHVsZSZxdW90OywgbW9kdWxlTmFtZSkK"}}),e._v(" "),a("p",[e._v("We use "),a("code",[e._v('"module"')]),e._v(" as a schema type for all module derived addresses. Module accounts can have sub accounts. The derivation process has a defined order: module name, submodule key, subsubmodule key.\nModule account addresses are heavily used in the Cosmos SDK so it makes sense to optimize the derivation process: instead of using of using "),a("code",[e._v("LengthPrefix")]),e._v(" for the module name, we use a null byte ("),a("code",[e._v("'\\x00'")]),e._v(") as a separator. This works, because null byte is not a part of a valid module name.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBNb2R1bGUobW9kdWxlTmFtZSBzdHJpbmcsIGtleSBbXWJ5dGUpIFtdYnl0ZXsKCXJldHVybiBIYXNoKCZxdW90O21vZHVsZSZxdW90OywgW11ieXRlKG1vZHVsZU5hbWUpICsgMCArIGtleSkKfQo="}}),e._v(" "),a("p",[a("strong",[e._v("Example")]),e._v("  A lending BTC pool address would be:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"YnRjUG9vbCA6PSBhZGRyZXNzLk1vZHVsZSgmcXVvdDtsZW5kaW5nJnF1b3Q7LCBidGMuQWRkcnJlc3MoKX0pCg=="}}),e._v(" "),a("p",[e._v("If we want to create an address for a module account depending on more than one key, we can concatenate them:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"YnRjQXRvbUFNTSA6PSBhZGRyZXNzLk1vZHVsZSgmcXVvdDthbW0mcXVvdDssIGJ0Yy5BZGRycmVzcygpICsgYXRvbS5BZGRyZXNzKCl9KQo="}}),e._v(" "),a("h4",{attrs:{id:"derived-addresses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#derived-addresses"}},[e._v("#")]),e._v(" Derived Addresses")]),e._v(" "),a("p",[e._v("We must be able to cryptographically derive one address from another one. The derivation process must guarantee hash properties, hence we use the already defined "),a("code",[e._v("Hash")]),e._v(" function:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBEZXJpdmUoYWRkcmVzcyBbXWJ5dGUsIGRlcml2YXRpb25LZXkgW11ieXRlKSBbXWJ5dGUgewogICAgcmV0dXJuIEhhc2goYWRkcmVzLCBkZXJpdmF0aW9uS2V5KQp9Cg=="}}),e._v(" "),a("p",[e._v("Note: "),a("code",[e._v("Module")]),e._v(" is a special case of the more general "),a("em",[e._v("derived")]),e._v(" address, where we set the "),a("code",[e._v('"module"')]),e._v(" string for the "),a("em",[e._v("from address")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Example")]),e._v("  For a cosmwasm smart-contract address we could use the following construction:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"c21hcnRDb250cmFjdEFkZHIgOj0gRGVyaXZlZChNb2R1bGUoJnF1b3Q7Y29zbXdhc20mcXVvdDssIHNtYXJ0Q29udHJhY3RzTmFtZXNwYWNlKSwgW117c21hcnRDb250cmFjdEtleX0pCg=="}}),e._v(" "),a("h3",{attrs:{id:"schema-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schema-types"}},[e._v("#")]),e._v(" Schema Types")]),e._v(" "),a("p",[e._v("A "),a("code",[e._v("typ")]),e._v(" parameter used in "),a("code",[e._v("Hash")]),e._v(" function SHOULD be unique for each account type.\nSince all Cosmos SDK account types are serialized in the state, we propose to use the protobuf message name string.")]),e._v(" "),a("p",[e._v("Example: all public key types have a unique protobuf message type similar to:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"cGFja2FnZSBjb3Ntb3MuY3J5cHRvLnNyMjU1MTk7CgptZXNzYWdlIFB1YktleSB7CiAgYnl0ZXMga2V5ID0gMTsKfQo="}}),e._v(" "),a("p",[e._v("All protobuf messages have unique fully qualified names, in this example "),a("code",[e._v("cosmos.crypto.sr25519.PubKey")]),e._v(".\nThese names are derived directly from .proto files in a standardized way and used\nin other places such as the type URL in "),a("code",[e._v("Any")]),e._v("s. We can easily obtain the name using\n"),a("code",[e._v("proto.MessageName(msg)")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),a("p",[e._v("This ADR is compatible with what was committed and directly supported in the Cosmos SDK repository.")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("a simple algorithm for generating addresses for new public keys, complex accounts and modules")]),e._v(" "),a("li",[e._v("the algorithm generalizes "),a("em",[e._v("native composed keys")])]),e._v(" "),a("li",[e._v("increased security and collision resistance of addresses")]),e._v(" "),a("li",[e._v("the approach is extensible for future use-cases - one can use other address types, as long as they don't conflict with the address length specified here (20 or 32 bytes).")]),e._v(" "),a("li",[e._v("support new account types.")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[e._v("addresses do not communicate key type, a prefixed approach would have done this")]),e._v(" "),a("li",[e._v("addresses are 60% longer and will consume more storage space")]),e._v(" "),a("li",[e._v("requires a refactor of KVStore store keys to handle variable length addresses")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("ul",[a("li",[e._v("protobuf message names are used as key type prefixes")])]),e._v(" "),a("h2",{attrs:{id:"further-discussions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-discussions"}},[e._v("#")]),e._v(" Further Discussions")]),e._v(" "),a("p",[e._v("Some accounts can have a fixed name or may be constructed in other way (eg: modules). We were discussing an idea of an account with a predefined name (eg: "),a("code",[e._v("me.regen")]),e._v("), which could be used by institutions.\nWithout going into details, these kinds of addresses are compatible with the hash based addresses described here as long as they don't have the same length.\nMore specifically, any special account address must not have a length equal to 20 or 32 bytes.")]),e._v(" "),a("h2",{attrs:{id:"appendix-consulting-session"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appendix-consulting-session"}},[e._v("#")]),e._v(" Appendix: Consulting session")]),e._v(" "),a("p",[e._v("End of Dec 2020 we had a session with "),a("a",{attrs:{href:"https://scholar.google.be/citations?user=4LyZn8oAAAAJ&hl=en",target:"_blank",rel:"noopener noreferrer"}},[e._v("Alan Szepieniec"),a("OutboundLink")],1),e._v(" to consult the approach presented above.")]),e._v(" "),a("p",[e._v("Alan general observations:")]),e._v(" "),a("ul",[a("li",[e._v("we don’t need 2-preimage resistance")]),e._v(" "),a("li",[e._v("we need 32bytes address space for collision resistance")]),e._v(" "),a("li",[e._v("when an attacker can control an input for object with an address then we have a problem with birthday attack")]),e._v(" "),a("li",[e._v("there is an issue with smart-contracts for hashing")]),e._v(" "),a("li",[e._v("sha2 mining can be use to breaking address pre-image")])]),e._v(" "),a("p",[e._v("Hashing algorithm")]),e._v(" "),a("ul",[a("li",[e._v("any attack breaking blake3 will break blake2")]),e._v(" "),a("li",[e._v("Alan is pretty confident about the current security analysis of the blake hash algorithm. It was a finalist, and the author is well known in security analysis.")])]),e._v(" "),a("p",[e._v("Algorithm:")]),e._v(" "),a("ul",[a("li",[e._v("Alan recommends to hash the prefix: "),a("code",[e._v("address(pub_key) = hash(hash(key_type) + pub_key)[:32]")]),e._v(", main benefits:\n"),a("ul",[a("li",[e._v("we are free to user arbitrary long prefix names")]),e._v(" "),a("li",[e._v("we still don’t risk collisions")]),e._v(" "),a("li",[e._v("switch tables")])])]),e._v(" "),a("li",[e._v("discussion about penalization -> about adding prefix post hash")]),e._v(" "),a("li",[e._v("Aaron asked about post hash prefixes ("),a("code",[e._v("address(pub_key) = key_type + hash(pub_key)")]),e._v(") and differences. Alan noted that this approach has longer address space and it’s stronger.")])]),e._v(" "),a("p",[e._v("Algorithm for complex / composed keys:")]),e._v(" "),a("ul",[a("li",[e._v("merging tree like addresses with same algorithm are fine")])]),e._v(" "),a("p",[e._v("Module addresses: Should module addresses have different size to differentiate it?")]),e._v(" "),a("ul",[a("li",[e._v("we will need to set a pre-image prefix for module addresse to keept them in 32-byte space: "),a("code",[e._v("hash(hash('module') + module_key)")])]),e._v(" "),a("li",[e._v("Aaron observation: we already need to deal with variable length (to not break secp256k1 keys).")])]),e._v(" "),a("p",[e._v("Discssion about arithmetic hash function for ZKP")]),e._v(" "),a("ul",[a("li",[e._v("Posseidon / Rescue")]),e._v(" "),a("li",[e._v("Problem: much bigger risk because we don’t know much techniques and history of crypto-analysis of arithmetic constructions. It’s still a new ground and area of active research.")])]),e._v(" "),a("p",[e._v("Post quantum signature size")]),e._v(" "),a("ul",[a("li",[e._v("Alan suggestion: Falcon: speed / size ration - very good.")]),e._v(" "),a("li",[e._v("Aaron - should we think about it?\nAlan: based on early extrapolation this thing will get able to break EC cryptography in 2050 . But that’s a lot of uncertainty. But there is magic happening with recurions / linking / simulation and that can speedup the progress.")])]),e._v(" "),a("p",[e._v("Other ideas")]),e._v(" "),a("ul",[a("li",[e._v("Let’s say we use same key and two different address algorithms for 2 different use cases. Is it still safe to use it? Alan: if we want to hide the public key (which is not our use case), then it’s less secure but there are fixes.")])]),e._v(" "),a("h3",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://hackmd.io/_NGWI4xZSbKzj1BkCqyZMw",target:"_blank",rel:"noopener noreferrer"}},[e._v("Notes"),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);s.default=o.exports}}]);