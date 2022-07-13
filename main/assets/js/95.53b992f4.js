(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{638:function(e,a,t){"use strict";t.r(a);var s=t(1),l=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"adr-035-rosetta-api-support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adr-035-rosetta-api-support"}},[e._v("#")]),e._v(" ADR 035: Rosetta API Support")]),e._v(" "),t("h2",{attrs:{id:"authors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#authors"}},[e._v("#")]),e._v(" Authors")]),e._v(" "),t("ul",[t("li",[e._v("Jonathan Gimeno (@jgimeno)")]),e._v(" "),t("li",[e._v("David Grierson (@senormonito)")]),e._v(" "),t("li",[e._v("Alessio Treglia (@alessio)")]),e._v(" "),t("li",[e._v("Frojdy Dymylja (@fdymylja)")])]),e._v(" "),t("h2",{attrs:{id:"changelog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),t("ul",[t("li",[e._v("2021-05-12: the external library  "),t("a",{attrs:{href:"https://github.com/tendermint/cosmos-rosetta-gateway",target:"_blank",rel:"noopener noreferrer"}},[e._v("cosmos-rosetta-gateway"),t("OutboundLink")],1),e._v(" has been moved within the Cosmos SDK.")])]),e._v(" "),t("h2",{attrs:{id:"context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.rosetta-api.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rosetta API"),t("OutboundLink")],1),e._v(" is an open-source specification and set of tools developed by Coinbase to\nstandardise blockchain interactions.")]),e._v(" "),t("p",[e._v("Through the use of a standard API for integrating blockchain applications it will")]),e._v(" "),t("ul",[t("li",[e._v("Be easier for a user to interact with a given blockchain")]),e._v(" "),t("li",[e._v("Allow exchanges to integrate new blockchains quickly and easily")]),e._v(" "),t("li",[e._v("Enable application developers to build cross-blockchain applications such as block explorers, wallets and dApps at\nconsiderably lower cost and effort.")])]),e._v(" "),t("h2",{attrs:{id:"decision"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),t("p",[e._v("It is clear that adding Rosetta API support to the Cosmos SDK will bring value to all the developers and\nCosmos SDK based chains in the ecosystem. How it is implemented is key.")]),e._v(" "),t("p",[e._v("The driving principles of the proposed design are:")]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("Extensibility:")]),e._v(" it must be as riskless and painless as possible for application developers to set-up network\nconfigurations to expose Rosetta API-compliant services.")]),e._v(" "),t("li",[t("strong",[e._v("Long term support:")]),e._v(" This proposal aims to provide support for all the supported Cosmos SDK release series.")]),e._v(" "),t("li",[t("strong",[e._v("Cost-efficiency:")]),e._v(" Backporting changes to Rosetta API specifications from "),t("code",[e._v("master")]),e._v(" to the various stable\nbranches of Cosmos SDK is a cost that needs to be reduced.")])]),e._v(" "),t("p",[e._v("We will achieve these delivering on these principles by the following:")]),e._v(" "),t("ol",[t("li",[e._v("There will be a package "),t("code",[e._v("rosetta/lib")]),e._v("\nfor the implementation of the core Rosetta API features, particularly:\na. The types and interfaces ("),t("code",[e._v("Client")]),e._v(", "),t("code",[e._v("OfflineClient")]),e._v("...), this separates design from implementation detail.\nb. The "),t("code",[e._v("Server")]),e._v(" functionality as this is independent of the Cosmos SDK version.\nc. The "),t("code",[e._v("Online/OfflineNetwork")]),e._v(", which is not exported, and implements the rosetta API using the "),t("code",[e._v("Client")]),e._v(" interface to query the node, build tx and so on.\nd. The "),t("code",[e._v("errors")]),e._v(" package to extend rosetta errors.")]),e._v(" "),t("li",[e._v("Due to differences between the Cosmos release series, each series will have its own specific implementation of "),t("code",[e._v("Client")]),e._v(" interface.")]),e._v(" "),t("li",[e._v("There will be two options for starting an API service in applications:\na. API shares the application process\nb. API-specific process.")])]),e._v(" "),t("h2",{attrs:{id:"architecture"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),t("h3",{attrs:{id:"the-external-repo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-external-repo"}},[e._v("#")]),e._v(" The External Repo")]),e._v(" "),t("p",[e._v("As section will describe the proposed external library, including the service implementation, plus the defined types and interfaces.")]),e._v(" "),t("h4",{attrs:{id:"server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#server"}},[e._v("#")]),e._v(" Server")]),e._v(" "),t("p",[t("code",[e._v("Server")]),e._v(" is a simple "),t("code",[e._v("struct")]),e._v(" that is started and listens to the port specified in the settings. This is meant to be used across all the Cosmos SDK versions that are actively supported.")]),e._v(" "),t("p",[e._v("The constructor follows:")]),e._v(" "),t("p",[t("code",[e._v("func NewServer(settings Settings) (Server, error)")])]),e._v(" "),t("p",[t("code",[e._v("Settings")]),e._v(", which are used to construct a new server, are the following:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gU2V0dGluZ3MgZGVmaW5lIHRoZSByb3NldHRhIHNlcnZlciBzZXR0aW5ncwp0eXBlIFNldHRpbmdzIHN0cnVjdCB7CgkvLyBOZXR3b3JrIGNvbnRhaW5zIHRoZSBpbmZvcm1hdGlvbiByZWdhcmRpbmcgdGhlIG5ldHdvcmsKCU5ldHdvcmsgKnR5cGVzLk5ldHdvcmtJZGVudGlmaWVyCgkvLyBDbGllbnQgaXMgdGhlIG9ubGluZSBBUEkgaGFuZGxlcgoJQ2xpZW50IGNyZ3R5cGVzLkNsaWVudAoJLy8gTGlzdGVuIGlzIHRoZSBhZGRyZXNzIHRoZSBoYW5kbGVyIHdpbGwgbGlzdGVuIGF0CglMaXN0ZW4gc3RyaW5nCgkvLyBPZmZsaW5lIGRlZmluZXMgaWYgdGhlIHJvc2V0dGEgc2VydmljZSBzaG91bGQgYmUgZXhwb3NlZCBpbiBvZmZsaW5lIG1vZGUKCU9mZmxpbmUgYm9vbAoJLy8gUmV0cmllcyBpcyB0aGUgbnVtYmVyIG9mIHJlYWRpbmVzcyBjaGVja3MgdGhhdCB3aWxsIGJlIGF0dGVtcHRlZCB3aGVuIGluc3RhbnRpYXRpbmcgdGhlIGhhbmRsZXIKCS8vIHZhbGlkIG9ubHkgZm9yIG9ubGluZSBBUEkKCVJldHJpZXMgaW50CgkvLyBSZXRyeVdhaXQgaXMgdGhlIHRpbWUgdGhhdCB3aWxsIGJlIHdhaXRlZCBiZXR3ZWVuIHJldHJpZXMKCVJldHJ5V2FpdCB0aW1lLkR1cmF0aW9uCn0K"}}),e._v(" "),t("h4",{attrs:{id:"types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#types"}},[e._v("#")]),e._v(" Types")]),e._v(" "),t("p",[e._v("Package types uses a mixture of rosetta types and custom defined type wrappers, that the client must parse and return while executing operations.")]),e._v(" "),t("h5",{attrs:{id:"interfaces"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interfaces"}},[e._v("#")]),e._v(" Interfaces")]),e._v(" "),t("p",[e._v("Every SDK version uses a different format to connect (rpc, gRPC, etc), query and build transactions, we have abstracted this in what is the "),t("code",[e._v("Client")]),e._v(" interface.\nThe client uses rosetta types, whilst the "),t("code",[e._v("Online/OfflineNetwork")]),e._v(" takes care of returning correctly parsed rosetta responses and errors.")]),e._v(" "),t("p",[e._v("Each Cosmos SDK release series will have their own "),t("code",[e._v("Client")]),e._v(" implementations.\nDevelopers can implement their own custom "),t("code",[e._v("Client")]),e._v("s as required.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gQ2xpZW50IGRlZmluZXMgdGhlIEFQSSB0aGUgY2xpZW50IGltcGxlbWVudGF0aW9uIHNob3VsZCBwcm92aWRlLgp0eXBlIENsaWVudCBpbnRlcmZhY2UgewoJLy8gTmVlZGVkIGlmIHRoZSBjbGllbnQgbmVlZHMgdG8gcGVyZm9ybSBzb21lIGFjdGlvbiBiZWZvcmUgY29ubmVjdGluZy4KCUJvb3RzdHJhcCgpIGVycm9yCgkvLyBSZWFkeSBjaGVja3MgaWYgdGhlIHNlcnZpY2VyIGNvbnN0cmFpbnRzIGZvciBxdWVyaWVzIGFyZSBzYXRpc2ZpZWQKCS8vIGZvciBleGFtcGxlIHRoZSBub2RlIG1pZ2h0IHN0aWxsIG5vdCBiZSByZWFkeSwgaXQncyB1c2VmdWwgaW4gcHJvY2VzcwoJLy8gd2hlbiB0aGUgcm9zZXR0YSBpbnN0YW5jZSBtaWdodCBjb21lIHVwIGJlZm9yZSB0aGUgbm9kZSBpdHNlbGYKCS8vIHRoZSBzZXJ2aWNlciBtdXN0IHJldHVybiBuaWwgaWYgdGhlIG5vZGUgaXMgcmVhZHkKCVJlYWR5KCkgZXJyb3IKCgkvLyBEYXRhIEFQSQoKCS8vIEJhbGFuY2VzIGZldGNoZXMgdGhlIGJhbGFuY2Ugb2YgdGhlIGdpdmVuIGFkZHJlc3MKCS8vIGlmIGhlaWdodCBpcyBub3QgbmlsLCB0aGVuIHRoZSBiYWxhbmNlIHdpbGwgYmUgZGlzcGxheWVkCgkvLyBhdCB0aGUgcHJvdmlkZWQgaGVpZ2h0LCBvdGhlcndpc2UgbGFzdCBibG9jayBiYWxhbmNlIHdpbGwgYmUgcmV0dXJuZWQKCUJhbGFuY2VzKGN0eCBjb250ZXh0LkNvbnRleHQsIGFkZHIgc3RyaW5nLCBoZWlnaHQgKmludDY0KSAoW10qdHlwZXMuQW1vdW50LCBlcnJvcikKCS8vIEJsb2NrQnlIYXNoQWx0IGdldHMgYSBibG9jayBhbmQgaXRzIHRyYW5zYWN0aW9uIGF0IHRoZSBwcm92aWRlZCBoZWlnaHQKCUJsb2NrQnlIYXNoKGN0eCBjb250ZXh0LkNvbnRleHQsIGhhc2ggc3RyaW5nKSAoQmxvY2tSZXNwb25zZSwgZXJyb3IpCgkvLyBCbG9ja0J5SGVpZ2h0QWx0IGdldHMgYSBibG9jayBnaXZlbiBpdHMgaGVpZ2h0LCBpZiBoZWlnaHQgaXMgbmlsIHRoZW4gbGFzdCBibG9jayBpcyByZXR1cm5lZAoJQmxvY2tCeUhlaWdodChjdHggY29udGV4dC5Db250ZXh0LCBoZWlnaHQgKmludDY0KSAoQmxvY2tSZXNwb25zZSwgZXJyb3IpCgkvLyBCbG9ja1RyYW5zYWN0aW9uc0J5SGFzaCBnZXRzIHRoZSBibG9jaywgcGFyZW50IGJsb2NrIGFuZCB0cmFuc2FjdGlvbnMKCS8vIGdpdmVuIHRoZSBibG9jayBoYXNoLgoJQmxvY2tUcmFuc2FjdGlvbnNCeUhhc2goY3R4IGNvbnRleHQuQ29udGV4dCwgaGFzaCBzdHJpbmcpIChCbG9ja1RyYW5zYWN0aW9uc1Jlc3BvbnNlLCBlcnJvcikKCS8vIEJsb2NrVHJhbnNhY3Rpb25zQnlIYXNoIGdldHMgdGhlIGJsb2NrLCBwYXJlbnQgYmxvY2sgYW5kIHRyYW5zYWN0aW9ucwoJLy8gZ2l2ZW4gdGhlIGJsb2NrIGhhc2guCglCbG9ja1RyYW5zYWN0aW9uc0J5SGVpZ2h0KGN0eCBjb250ZXh0LkNvbnRleHQsIGhlaWdodCAqaW50NjQpIChCbG9ja1RyYW5zYWN0aW9uc1Jlc3BvbnNlLCBlcnJvcikKCS8vIEdldFR4IGdldHMgYSB0cmFuc2FjdGlvbiBnaXZlbiBpdHMgaGFzaAoJR2V0VHgoY3R4IGNvbnRleHQuQ29udGV4dCwgaGFzaCBzdHJpbmcpICgqdHlwZXMuVHJhbnNhY3Rpb24sIGVycm9yKQoJLy8gR2V0VW5jb25maXJtZWRUeCBnZXRzIGFuIHVuY29uZmlybWVkIFR4IGdpdmVuIGl0cyBoYXNoCgkvLyBOT1RFKGZkeW15bGphKTogTk9UIElNUExFTUVOVEVEIFlFVCEKCUdldFVuY29uZmlybWVkVHgoY3R4IGNvbnRleHQuQ29udGV4dCwgaGFzaCBzdHJpbmcpICgqdHlwZXMuVHJhbnNhY3Rpb24sIGVycm9yKQoJLy8gTWVtcG9vbCByZXR1cm5zIHRoZSBsaXN0IG9mIHRoZSBjdXJyZW50IG5vbiBjb25maXJtZWQgdHJhbnNhY3Rpb25zCglNZW1wb29sKGN0eCBjb250ZXh0LkNvbnRleHQpIChbXSp0eXBlcy5UcmFuc2FjdGlvbklkZW50aWZpZXIsIGVycm9yKQoJLy8gUGVlcnMgZ2V0cyB0aGUgcGVlcnMgY3VycmVudGx5IGNvbm5lY3RlZCB0byB0aGUgbm9kZQoJUGVlcnMoY3R4IGNvbnRleHQuQ29udGV4dCkgKFtdKnR5cGVzLlBlZXIsIGVycm9yKQoJLy8gU3RhdHVzIHJldHVybnMgdGhlIG5vZGUgc3RhdHVzLCBzdWNoIGFzIHN5bmMgZGF0YSwgdmVyc2lvbiBldGMKCVN0YXR1cyhjdHggY29udGV4dC5Db250ZXh0KSAoKnR5cGVzLlN5bmNTdGF0dXMsIGVycm9yKQoKCS8vIENvbnN0cnVjdGlvbiBBUEkKCgkvLyBQb3N0VHggcG9zdHMgdHhCeXRlcyB0byB0aGUgbm9kZSBhbmQgcmV0dXJucyB0aGUgdHJhbnNhY3Rpb24gaWRlbnRpZmllciBwbHVzIG1ldGFkYXRhIHJlbGF0ZWQKCS8vIHRvIHRoZSB0cmFuc2FjdGlvbiBpdHNlbGYuCglQb3N0VHgodHhCeXRlcyBbXWJ5dGUpIChyZXMgKnR5cGVzLlRyYW5zYWN0aW9uSWRlbnRpZmllciwgbWV0YSBtYXBbc3RyaW5nXWludGVyZmFjZXt9LCBlcnIgZXJyb3IpCgkvLyBDb25zdHJ1Y3Rpb25NZXRhZGF0YUZyb21PcHRpb25zCglDb25zdHJ1Y3Rpb25NZXRhZGF0YUZyb21PcHRpb25zKGN0eCBjb250ZXh0LkNvbnRleHQsIG9wdGlvbnMgbWFwW3N0cmluZ11pbnRlcmZhY2V7fSkgKG1ldGEgbWFwW3N0cmluZ11pbnRlcmZhY2V7fSwgZXJyIGVycm9yKQoJT2ZmbGluZUNsaWVudAp9CgovLyBPZmZsaW5lQ2xpZW50IGRlZmluZXMgdGhlIGZ1bmN0aW9uYWxpdGllcyBzdXBwb3J0ZWQgd2l0aG91dCBoYXZpbmcgYWNjZXNzIHRvIHRoZSBub2RlCnR5cGUgT2ZmbGluZUNsaWVudCBpbnRlcmZhY2UgewoJTmV0d29ya0luZm9ybWF0aW9uUHJvdmlkZXIKCS8vIFNpZ25lZFR4IHJldHVybnMgdGhlIHNpZ25lZCB0cmFuc2FjdGlvbiBnaXZlbiB0aGUgdHggYnl0ZXMgKG1zZ3MpIHBsdXMgdGhlIHNpZ25hdHVyZXMKCVNpZ25lZFR4KGN0eCBjb250ZXh0LkNvbnRleHQsIHR4Qnl0ZXMgW11ieXRlLCBzaWdzIFtdKnR5cGVzLlNpZ25hdHVyZSkgKHNpZ25lZFR4Qnl0ZXMgW11ieXRlLCBlcnIgZXJyb3IpCgkvLyBUeE9wZXJhdGlvbnNBbmRTaWduZXJzQWNjb3VudElkZW50aWZpZXJzIHJldHVybnMgdGhlIG9wZXJhdGlvbnMgcmVsYXRlZCB0byBhIHRyYW5zYWN0aW9uIGFuZCB0aGUgYWNjb3VudAoJLy8gaWRlbnRpZmllcnMgaWYgdGhlIHRyYW5zYWN0aW9uIGlzIHNpZ25lZAoJVHhPcGVyYXRpb25zQW5kU2lnbmVyc0FjY291bnRJZGVudGlmaWVycyhzaWduZWQgYm9vbCwgaGV4Qnl0ZXMgW11ieXRlKSAob3BzIFtdKnR5cGVzLk9wZXJhdGlvbiwgc2lnbmVycyBbXSp0eXBlcy5BY2NvdW50SWRlbnRpZmllciwgZXJyIGVycm9yKQoJLy8gQ29uc3RydWN0aW9uUGF5bG9hZCByZXR1cm5zIHRoZSBjb25zdHJ1Y3Rpb24gcGF5bG9hZCBnaXZlbiB0aGUgcmVxdWVzdAoJQ29uc3RydWN0aW9uUGF5bG9hZChjdHggY29udGV4dC5Db250ZXh0LCByZXEgKnR5cGVzLkNvbnN0cnVjdGlvblBheWxvYWRzUmVxdWVzdCkgKHJlc3AgKnR5cGVzLkNvbnN0cnVjdGlvblBheWxvYWRzUmVzcG9uc2UsIGVyciBlcnJvcikKCS8vIFByZXByb2Nlc3NPcGVyYXRpb25zVG9PcHRpb25zIHJldHVybnMgdGhlIG9wdGlvbnMgZ2l2ZW4gdGhlIHByZXByb2Nlc3Mgb3BlcmF0aW9ucwoJUHJlcHJvY2Vzc09wZXJhdGlvbnNUb09wdGlvbnMoY3R4IGNvbnRleHQuQ29udGV4dCwgcmVxICp0eXBlcy5Db25zdHJ1Y3Rpb25QcmVwcm9jZXNzUmVxdWVzdCkgKG9wdGlvbnMgbWFwW3N0cmluZ11pbnRlcmZhY2V7fSwgZXJyIGVycm9yKQoJLy8gQWNjb3VudElkZW50aWZpZXJGcm9tUHVibGljS2V5IHJldHVybnMgdGhlIGFjY291bnQgaWRlbnRpZmllciBnaXZlbiB0aGUgcHVibGljIGtleQoJQWNjb3VudElkZW50aWZpZXJGcm9tUHVibGljS2V5KHB1YktleSAqdHlwZXMuUHVibGljS2V5KSAoKnR5cGVzLkFjY291bnRJZGVudGlmaWVyLCBlcnJvcikKfQo="}}),e._v(" "),t("h3",{attrs:{id:"_2-cosmos-sdk-implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-cosmos-sdk-implementation"}},[e._v("#")]),e._v(" 2. Cosmos SDK Implementation")]),e._v(" "),t("p",[e._v("The Cosmos SDK implementation, based on version, takes care of satisfying the "),t("code",[e._v("Client")]),e._v(" interface.\nIn Stargate, Launchpad and 0.37, we have introduced the concept of rosetta.Msg, this message is not in the shared repository as the sdk.Msg type differs between Cosmos SDK versions.")]),e._v(" "),t("p",[e._v("The rosetta.Msg interface follows:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTXNnIHJlcHJlc2VudHMgYSBjb3Ntb3Mtc2RrIG1lc3NhZ2UgdGhhdCBjYW4gYmUgY29udmVydGVkIGZyb20gYW5kIHRvIGEgcm9zZXR0YSBvcGVyYXRpb24uCnR5cGUgTXNnIGludGVyZmFjZSB7CglzZGsuTXNnCglUb09wZXJhdGlvbnMod2l0aFN0YXR1cywgaGFzRXJyb3IgYm9vbCkgW10qdHlwZXMuT3BlcmF0aW9uCglGcm9tT3BlcmF0aW9ucyhvcHMgW10qdHlwZXMuT3BlcmF0aW9uKSAoc2RrLk1zZywgZXJyb3IpCn0K"}}),e._v(" "),t("p",[e._v("Hence developers who want to extend the rosetta set of supported operations just need to extend their module's sdk.Msgs with the "),t("code",[e._v("ToOperations")]),e._v(" and "),t("code",[e._v("FromOperations")]),e._v(" methods.")]),e._v(" "),t("h3",{attrs:{id:"_3-api-service-invocation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-api-service-invocation"}},[e._v("#")]),e._v(" 3. API service invocation")]),e._v(" "),t("p",[e._v("As stated at the start, application developers will have two methods for invocation of the Rosetta API service:")]),e._v(" "),t("ol",[t("li",[e._v("Shared process for both application and API")]),e._v(" "),t("li",[e._v("Standalone API service")])]),e._v(" "),t("h4",{attrs:{id:"shared-process-only-stargate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shared-process-only-stargate"}},[e._v("#")]),e._v(" Shared Process (Only Stargate)")]),e._v(" "),t("p",[e._v("Rosetta API service could run within the same execution process as the application. This would be enabled via app.toml settings, and if gRPC is not enabled the rosetta instance would be spinned in offline mode (tx building capabilities only).")]),e._v(" "),t("h4",{attrs:{id:"separate-api-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#separate-api-service"}},[e._v("#")]),e._v(" Separate API service")]),e._v(" "),t("p",[e._v("Client application developers can write a new command to launch a Rosetta API server as a separate process too, using the rosetta command contained in the "),t("code",[e._v("/server/rosetta")]),e._v(" package. Construction of the command depends on Cosmos SDK version. Examples can be found inside "),t("code",[e._v("simd")]),e._v(" for stargate, and "),t("code",[e._v("contrib/rosetta/simapp")]),e._v(" for other release series.")]),e._v(" "),t("h2",{attrs:{id:"status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),t("p",[e._v("Proposed")]),e._v(" "),t("h2",{attrs:{id:"consequences"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),t("h3",{attrs:{id:"positive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),t("ul",[t("li",[e._v("Out-of-the-box Rosetta API support within Cosmos SDK.")]),e._v(" "),t("li",[e._v("Blockchain interface standardisation")])]),e._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("ul",[t("li",[e._v("https://www.rosetta-api.org/")])])],1)}),[],!1,null,null,null);a.default=l.exports}}]);