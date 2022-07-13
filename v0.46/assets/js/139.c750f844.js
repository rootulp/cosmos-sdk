(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{820:function(e,t,a){"use strict";a.r(t);var o=a(1),c=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"node-client-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-client-daemon"}},[e._v("#")]),e._v(" Node Client (Daemon)")]),e._v(" "),a("p",{attrs:{synopsis:""}},[e._v("The main endpoint of a Cosmos SDK application is the daemon client, otherwise known as the full-node client. The full-node runs the state-machine, starting from a genesis file. It connects to peers running the same client in order to receive and relay transactions, block proposals and signatures. The full-node is constituted of the application, defined with the Cosmos SDK, and of a consensus engine connected to the application via the ABCI.")]),e._v(" "),a("h2",{attrs:{id:"pre-requisite-readings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),a("ul",[a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/basics/app-anatomy.html"}},[e._v("Anatomy of an SDK application")])],1)]),e._v(" "),a("h2",{attrs:{id:"main-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-function"}},[e._v("#")]),e._v(" "),a("code",[e._v("main")]),e._v(" function")]),e._v(" "),a("p",[e._v("The full-node client of any Cosmos SDK application is built by running a "),a("code",[e._v("main")]),e._v(" function. The client is generally named by appending the "),a("code",[e._v("-d")]),e._v(" suffix to the application name (e.g. "),a("code",[e._v("appd")]),e._v(" for an application named "),a("code",[e._v("app")]),e._v("), and the "),a("code",[e._v("main")]),e._v(" function is defined in a "),a("code",[e._v("./appd/cmd/main.go")]),e._v(" file. Running this function creates an executable "),a("code",[e._v("appd")]),e._v(" that comes with a set of commands. For an app named "),a("code",[e._v("app")]),e._v(", the main command is "),a("a",{attrs:{href:"#start-command"}},[a("code",[e._v("appd start")])]),e._v(", which starts the full-node.")]),e._v(" "),a("p",[e._v("In general, developers will implement the "),a("code",[e._v("main.go")]),e._v(" function with the following structure:")]),e._v(" "),a("ul",[a("li",[e._v("First, an "),a("RouterLink",{attrs:{to:"/core/encoding.html"}},[a("code",[e._v("encodingCodec")])]),e._v(" is instantiated for the application.")],1),e._v(" "),a("li",[e._v("Then, the "),a("code",[e._v("config")]),e._v(" is retrieved and config parameters are set. This mainly involves setting the Bech32 prefixes for "),a("RouterLink",{attrs:{to:"/basics/accounts.html#addresses"}},[e._v("addresses")]),e._v(".\n"),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ29uZmlnIGlzIHRoZSBzdHJ1Y3R1cmUgdGhhdCBob2xkcyB0aGUgU0RLIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycy4KLy8gVGhpcyBjb3VsZCBiZSB1c2VkIHRvIGluaXRpYWxpemUgY2VydGFpbiBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgZm9yIHRoZSBTREsuCnR5cGUgQ29uZmlnIHN0cnVjdCB7CglmdWxsRnVuZHJhaXNlclBhdGggIHN0cmluZwoJYmVjaDMyQWRkcmVzc1ByZWZpeCBtYXBbc3RyaW5nXXN0cmluZwoJdHhFbmNvZGVyICAgICAgICAgICBUeEVuY29kZXIKCWFkZHJlc3NWZXJpZmllciAgICAgZnVuYyhbXWJ5dGUpIGVycm9yCgltdHggICAgICAgICAgICAgICAgIHN5bmMuUldNdXRleAoKCS8vIFNMSVAtNDQgcmVsYXRlZAoJcHVycG9zZSAgdWludDMyCgljb2luVHlwZSB1aW50MzIKCglzZWFsZWQgICBib29sCglzZWFsZWRjaCBjaGFuIHN0cnVjdHt9Cn0="}})],1),e._v(" "),a("li",[e._v("Using "),a("a",{attrs:{href:"https://github.com/spf13/cobra",target:"_blank",rel:"noopener noreferrer"}},[e._v("cobra"),a("OutboundLink")],1),e._v(", the root command of the full-node client is created. After that, all the custom commands of the application are added using the "),a("code",[e._v("AddCommand()")]),e._v(" method of "),a("code",[e._v("rootCmd")]),e._v(".")]),e._v(" "),a("li",[e._v("Add default server commands to "),a("code",[e._v("rootCmd")]),e._v(" using the "),a("code",[e._v("server.AddCommands()")]),e._v(" method. These commands are separated from the ones added above since they are standard and defined at Cosmos SDK level. They should be shared by all Cosmos SDK-based applications. They include the most important command: the "),a("a",{attrs:{href:"#start-command"}},[a("code",[e._v("start")]),e._v(" command")]),e._v(".")]),e._v(" "),a("li",[e._v("Prepare and execute the "),a("code",[e._v("executor")]),e._v(".\n"),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gRXhlY3V0b3Igd3JhcHMgdGhlIGNvYnJhIENvbW1hbmQgd2l0aCBhIG5pY2VyIEV4ZWN1dGUgbWV0aG9kCnR5cGUgRXhlY3V0b3Igc3RydWN0IHsKCSpjb2JyYS5Db21tYW5kCglFeGl0IGZ1bmMoaW50KSAvLyB0aGlzIGlzIG9zLkV4aXQgYnkgZGVmYXVsdCwgb3ZlcnJpZGUgaW4gdGVzdHMKfQ=="}})],1)]),e._v(" "),a("p",[e._v("See an example of "),a("code",[e._v("main")]),e._v(" function from the "),a("code",[e._v("simapp")]),e._v(" application, the Cosmos SDK's application for demo purposes:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBtYWluCgppbXBvcnQgKAoJJnF1b3Q7b3MmcXVvdDsKCgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3NlcnZlciZxdW90OwoJc3ZyY21kICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvc2VydmVyL2NtZCZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9zaW1hcHAmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvc2ltYXBwL3NpbWQvY21kJnF1b3Q7CikKCmZ1bmMgbWFpbigpIHsKCXJvb3RDbWQsIF8gOj0gY21kLk5ld1Jvb3RDbWQoKQoKCWlmIGVyciA6PSBzdnJjbWQuRXhlY3V0ZShyb290Q21kLCAmcXVvdDsmcXVvdDssIHNpbWFwcC5EZWZhdWx0Tm9kZUhvbWUpOyBlcnIgIT0gbmlsIHsKCQlzd2l0Y2ggZSA6PSBlcnIuKHR5cGUpIHsKCQljYXNlIHNlcnZlci5FcnJvckNvZGU6CgkJCW9zLkV4aXQoZS5Db2RlKQoKCQlkZWZhdWx0OgoJCQlvcy5FeGl0KDEpCgkJfQoJfQp9Cg=="}})],1),e._v(" "),a("h2",{attrs:{id:"start-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-command"}},[e._v("#")]),e._v(" "),a("code",[e._v("start")]),e._v(" command")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("start")]),e._v(" command is defined in the "),a("code",[e._v("/server")]),e._v(" folder of the Cosmos SDK. It is added to the root command of the full-node client in the "),a("a",{attrs:{href:"#main-function"}},[a("code",[e._v("main")]),e._v(" function")]),e._v(" and called by the end-user to start their node:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"IyBGb3IgYW4gZXhhbXBsZSBhcHAgbmFtZWQgJnF1b3Q7YXBwJnF1b3Q7LCB0aGUgZm9sbG93aW5nIGNvbW1hbmQgc3RhcnRzIHRoZSBmdWxsLW5vZGUuCmFwcGQgc3RhcnQKCiMgVXNpbmcgdGhlIENvc21vcyBTREsncyBvd24gc2ltYXBwLCB0aGUgZm9sbG93aW5nIGNvbW1hbmRzIHN0YXJ0IHRoZSBzaW1hcHAgbm9kZS4Kc2ltZCBzdGFydAo="}}),e._v(" "),a("p",[e._v("As a reminder, the full-node is composed of three conceptual layers: the networking layer, the consensus layer and the application layer. The first two are generally bundled together in an entity called the consensus engine (Tendermint Core by default), while the third is the state-machine defined with the help of the Cosmos SDK. Currently, the Cosmos SDK uses Tendermint as the default consensus engine, meaning the start command is implemented to boot up a Tendermint node.")]),e._v(" "),a("p",[e._v("The flow of the "),a("code",[e._v("start")]),e._v(" command is pretty straightforward. First, it retrieves the "),a("code",[e._v("config")]),e._v(" from the "),a("code",[e._v("context")]),e._v(" in order to open the "),a("code",[e._v("db")]),e._v(" (a "),a("a",{attrs:{href:"https://github.com/syndtr/goleveldb",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("leveldb")]),a("OutboundLink")],1),e._v(" instance by default). This "),a("code",[e._v("db")]),e._v(" contains the latest known state of the application (empty if the application is started from the first time.")]),e._v(" "),a("p",[e._v("With the "),a("code",[e._v("db")]),e._v(", the "),a("code",[e._v("start")]),e._v(" command creates a new instance of the application using an "),a("code",[e._v("appCreator")]),e._v(" function:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CWFwcCA6PSBhcHBDcmVhdG9yKGN0eC5Mb2dnZXIsIGRiLCB0cmFjZVdyaXRlciwgY3R4LlZpcGVyKQ=="}})],1),e._v(" "),a("p",[e._v("Note that an "),a("code",[e._v("appCreator")]),e._v(" is a function that fulfills the "),a("code",[e._v("AppCreator")]),e._v(" signature:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CS8vIEFwcENyZWF0b3IgaXMgYSBmdW5jdGlvbiB0aGF0IGFsbG93cyB1cyB0byBsYXppbHkgaW5pdGlhbGl6ZSBhbgoJLy8gYXBwbGljYXRpb24gdXNpbmcgdmFyaW91cyBjb25maWd1cmF0aW9ucy4KCUFwcENyZWF0b3IgZnVuYyhsb2cuTG9nZ2VyLCBkYm0uREIsIGlvLldyaXRlciwgQXBwT3B0aW9ucykgQXBwbGljYXRpb24="}})],1),e._v(" "),a("p",[e._v("In practice, the "),a("RouterLink",{attrs:{to:"/basics/app-anatomy.html#constructor-function"}},[e._v("constructor of the application")]),e._v(" is passed as the "),a("code",[e._v("appCreator")]),e._v(".")],1),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gbmV3QXBwIGlzIGFuIGFwcENyZWF0b3IKZnVuYyAoYSBhcHBDcmVhdG9yKSBuZXdBcHAobG9nZ2VyIGxvZy5Mb2dnZXIsIGRiIGRibS5EQiwgdHJhY2VTdG9yZSBpby5Xcml0ZXIsIGFwcE9wdHMgc2VydmVydHlwZXMuQXBwT3B0aW9ucykgc2VydmVydHlwZXMuQXBwbGljYXRpb24gewoJdmFyIGNhY2hlIHNkay5NdWx0aVN0b3JlUGVyc2lzdGVudENhY2hlCgoJaWYgY2FzdC5Ub0Jvb2woYXBwT3B0cy5HZXQoc2VydmVyLkZsYWdJbnRlckJsb2NrQ2FjaGUpKSB7CgkJY2FjaGUgPSBzdG9yZS5OZXdDb21taXRLVlN0b3JlQ2FjaGVNYW5hZ2VyKCkKCX0KCglza2lwVXBncmFkZUhlaWdodHMgOj0gbWFrZShtYXBbaW50NjRdYm9vbCkKCWZvciBfLCBoIDo9IHJhbmdlIGNhc3QuVG9JbnRTbGljZShhcHBPcHRzLkdldChzZXJ2ZXIuRmxhZ1Vuc2FmZVNraXBVcGdyYWRlcykpIHsKCQlza2lwVXBncmFkZUhlaWdodHNbaW50NjQoaCldID0gdHJ1ZQoJfQoKCXBydW5pbmdPcHRzLCBlcnIgOj0gc2VydmVyLkdldFBydW5pbmdPcHRpb25zRnJvbUZsYWdzKGFwcE9wdHMpCglpZiBlcnIgIT0gbmlsIHsKCQlwYW5pYyhlcnIpCgl9CgoJc25hcHNob3REaXIgOj0gZmlsZXBhdGguSm9pbihjYXN0LlRvU3RyaW5nKGFwcE9wdHMuR2V0KGZsYWdzLkZsYWdIb21lKSksICZxdW90O2RhdGEmcXVvdDssICZxdW90O3NuYXBzaG90cyZxdW90OykKCXNuYXBzaG90REIsIGVyciA6PSBkYm0uTmV3REIoJnF1b3Q7bWV0YWRhdGEmcXVvdDssIHNlcnZlci5HZXRBcHBEQkJhY2tlbmQoYXBwT3B0cyksIHNuYXBzaG90RGlyKQoJaWYgZXJyICE9IG5pbCB7CgkJcGFuaWMoZXJyKQoJfQoJc25hcHNob3RTdG9yZSwgZXJyIDo9IHNuYXBzaG90cy5OZXdTdG9yZShzbmFwc2hvdERCLCBzbmFwc2hvdERpcikKCWlmIGVyciAhPSBuaWwgewoJCXBhbmljKGVycikKCX0KCglzbmFwc2hvdE9wdGlvbnMgOj0gc25hcHNob3R0eXBlcy5OZXdTbmFwc2hvdE9wdGlvbnMoCgkJY2FzdC5Ub1VpbnQ2NChhcHBPcHRzLkdldChzZXJ2ZXIuRmxhZ1N0YXRlU3luY1NuYXBzaG90SW50ZXJ2YWwpKSwKCQljYXN0LlRvVWludDMyKGFwcE9wdHMuR2V0KHNlcnZlci5GbGFnU3RhdGVTeW5jU25hcHNob3RLZWVwUmVjZW50KSksCgkpCgoJcmV0dXJuIHNpbWFwcC5OZXdTaW1BcHAoCgkJbG9nZ2VyLCBkYiwgdHJhY2VTdG9yZSwgdHJ1ZSwgc2tpcFVwZ3JhZGVIZWlnaHRzLAoJCWNhc3QuVG9TdHJpbmcoYXBwT3B0cy5HZXQoZmxhZ3MuRmxhZ0hvbWUpKSwKCQljYXN0LlRvVWludChhcHBPcHRzLkdldChzZXJ2ZXIuRmxhZ0ludkNoZWNrUGVyaW9kKSksCgkJYS5lbmNDZmcsCgkJYXBwT3B0cywKCQliYXNlYXBwLlNldFBydW5pbmcocHJ1bmluZ09wdHMpLAoJCWJhc2VhcHAuU2V0TWluR2FzUHJpY2VzKGNhc3QuVG9TdHJpbmcoYXBwT3B0cy5HZXQoc2VydmVyLkZsYWdNaW5HYXNQcmljZXMpKSksCgkJYmFzZWFwcC5TZXRIYWx0SGVpZ2h0KGNhc3QuVG9VaW50NjQoYXBwT3B0cy5HZXQoc2VydmVyLkZsYWdIYWx0SGVpZ2h0KSkpLAoJCWJhc2VhcHAuU2V0SGFsdFRpbWUoY2FzdC5Ub1VpbnQ2NChhcHBPcHRzLkdldChzZXJ2ZXIuRmxhZ0hhbHRUaW1lKSkpLAoJCWJhc2VhcHAuU2V0TWluUmV0YWluQmxvY2tzKGNhc3QuVG9VaW50NjQoYXBwT3B0cy5HZXQoc2VydmVyLkZsYWdNaW5SZXRhaW5CbG9ja3MpKSksCgkJYmFzZWFwcC5TZXRJbnRlckJsb2NrQ2FjaGUoY2FjaGUpLAoJCWJhc2VhcHAuU2V0VHJhY2UoY2FzdC5Ub0Jvb2woYXBwT3B0cy5HZXQoc2VydmVyLkZsYWdUcmFjZSkpKSwKCQliYXNlYXBwLlNldEluZGV4RXZlbnRzKGNhc3QuVG9TdHJpbmdTbGljZShhcHBPcHRzLkdldChzZXJ2ZXIuRmxhZ0luZGV4RXZlbnRzKSkpLAoJCWJhc2VhcHAuU2V0U25hcHNob3Qoc25hcHNob3RTdG9yZSwgc25hcHNob3RPcHRpb25zKSwKCSkKfQ=="}})],1),e._v(" "),a("p",[e._v("Then, the instance of "),a("code",[e._v("app")]),e._v(" is used to instantiate a new Tendermint node:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CQl0bU5vZGUsIGVyciA9IG5vZGUuTmV3KGNmZywgY3R4LkxvZ2dlciwgYWJjaWNsaWVudC5OZXdMb2NhbENyZWF0b3IoYXBwKSwgZ2VuRG9jKQoJCWlmIGVyciAhPSBuaWwgewoJCQlyZXR1cm4gZXJyCgkJfQ=="}})],1),e._v(" "),a("p",[e._v("The Tendermint node can be created with "),a("code",[e._v("app")]),e._v(" because the latter satisfies the "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.35.4/abci/types/application.go#L7-L32",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("abci.Application")]),e._v(" interface"),a("OutboundLink")],1),e._v(" (given that "),a("code",[e._v("app")]),e._v(" extends "),a("RouterLink",{attrs:{to:"/core/baseapp.html"}},[a("code",[e._v("baseapp")])]),e._v("). As part of the "),a("code",[e._v("node.New")]),e._v(" method, Tendermint makes sure that the height of the application (i.e. number of blocks since genesis) is equal to the height of the Tendermint node. The difference between these two heights should always be negative or null. If it is strictly negative, "),a("code",[e._v("node.New")]),e._v(" will replay blocks until the height of the application reaches the height of the Tendermint node. Finally, if the height of the application is "),a("code",[e._v("0")]),e._v(", the Tendermint node will call "),a("RouterLink",{attrs:{to:"/core/baseapp.html#initchain"}},[a("code",[e._v("InitChain")])]),e._v(" on the application to initialize the state from the genesis file.")],1),e._v(" "),a("p",[e._v("Once the Tendermint node is instantiated and in sync with the application, the node can be started:")]),e._v(" "),a("p",[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CQlpZiBlcnIgOj0gdG1Ob2RlLlN0YXJ0KCk7IGVyciAhPSBuaWwgewoJCQlyZXR1cm4gZXJyCgkJfQ=="}})],1),e._v(" "),a("p",[e._v("Upon starting, the node will bootstrap its RPC and P2P server and start dialing peers. During handshake with its peers, if the node realizes they are ahead, it will query all the blocks sequentially in order to catch up. Then, it will wait for new block proposals and block signatures from validators in order to make progress.")]),e._v(" "),a("h2",{attrs:{id:"other-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-commands"}},[e._v("#")]),e._v(" Other commands")]),e._v(" "),a("p",[e._v("To discover how to concretely run a node and interact with it, please refer to our "),a("RouterLink",{attrs:{to:"/run-node/"}},[e._v("Running a Node, API and CLI")]),e._v(" guide.")],1),e._v(" "),a("h2",{attrs:{hide:"",id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),a("p",{attrs:{hide:""}},[e._v("Learn about the "),a("RouterLink",{attrs:{to:"/core/store.html"}},[e._v("store")])],1)],1)}),[],!1,null,null,null);t.default=c.exports}}]);