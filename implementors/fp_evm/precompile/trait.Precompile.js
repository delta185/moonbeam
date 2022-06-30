(function() {var implementors = {};
implementors["pallet_evm_precompile_author_mapping"] = [{"text":"impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_author_mapping/struct.AuthorMappingWrapper.html\" title=\"struct pallet_evm_precompile_author_mapping::AuthorMappingWrapper\">AuthorMappingWrapper</a>&lt;Runtime&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime: <a class=\"trait\" href=\"pallet_author_mapping/pallet/trait.Config.html\" title=\"trait pallet_author_mapping::pallet::Config\">Config</a> + Config + Config,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime::Call: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Runtime::Call as Dispatchable&gt;::Origin: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime::Call: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"pallet_author_mapping/pallet/enum.Call.html\" title=\"enum pallet_author_mapping::pallet::Call\">AuthorMappingCall</a>&lt;Runtime&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime::Hash: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;H256&gt;,&nbsp;</span>","synthetic":false,"types":["pallet_evm_precompile_author_mapping::AuthorMappingWrapper"]}];
implementors["pallet_evm_precompile_balances_erc20"] = [{"text":"impl&lt;Runtime, Metadata, Instance&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_balances_erc20/struct.Erc20BalancesPrecompile.html\" title=\"struct pallet_evm_precompile_balances_erc20::Erc20BalancesPrecompile\">Erc20BalancesPrecompile</a>&lt;Runtime, Metadata, Instance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Metadata: <a class=\"trait\" href=\"pallet_evm_precompile_balances_erc20/trait.Erc20Metadata.html\" title=\"trait pallet_evm_precompile_balances_erc20::Erc20Metadata\">Erc20Metadata</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Instance: <a class=\"trait\" href=\"pallet_evm_precompile_balances_erc20/trait.InstanceToPrefix.html\" title=\"trait pallet_evm_precompile_balances_erc20::InstanceToPrefix\">InstanceToPrefix</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime: Config&lt;Instance&gt; + Config + Config,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime::Call: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime::Call: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;Runtime, Instance&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Runtime::Call as Dispatchable&gt;::Origin: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"pallet_evm_precompile_balances_erc20/type.BalanceOf.html\" title=\"type pallet_evm_precompile_balances_erc20::BalanceOf\">BalanceOf</a>&lt;Runtime, Instance&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Runtime as Config&gt;::Moment: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt;,&nbsp;</span>","synthetic":false,"types":["pallet_evm_precompile_balances_erc20::Erc20BalancesPrecompile"]}];
implementors["pallet_evm_precompile_batch"] = [{"text":"impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_batch/struct.BatchPrecompile.html\" title=\"struct pallet_evm_precompile_batch::BatchPrecompile\">BatchPrecompile</a>&lt;Runtime&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime: Config,&nbsp;</span>","synthetic":false,"types":["pallet_evm_precompile_batch::BatchPrecompile"]}];
implementors["pallet_evm_precompile_call_permit"] = [{"text":"impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_call_permit/struct.CallPermitPrecompile.html\" title=\"struct pallet_evm_precompile_call_permit::CallPermitPrecompile\">CallPermitPrecompile</a>&lt;Runtime&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime: Config + Config,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Runtime as Config&gt;::Moment: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt;,&nbsp;</span>","synthetic":false,"types":["pallet_evm_precompile_call_permit::CallPermitPrecompile"]}];
implementors["pallet_evm_precompile_crowdloan_rewards"] = [{"text":"impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_crowdloan_rewards/struct.CrowdloanRewardsWrapper.html\" title=\"struct pallet_evm_precompile_crowdloan_rewards::CrowdloanRewardsWrapper\">CrowdloanRewardsWrapper</a>&lt;Runtime&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime: Config + Config,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"pallet_evm_precompile_crowdloan_rewards/type.BalanceOf.html\" title=\"type pallet_evm_precompile_crowdloan_rewards::BalanceOf\">BalanceOf</a>&lt;Runtime&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime::Call: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Runtime::Call as Dispatchable&gt;::Origin: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime::Call: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;Runtime&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["pallet_evm_precompile_crowdloan_rewards::CrowdloanRewardsWrapper"]}];
implementors["pallet_evm_precompile_democracy"] = [{"text":"impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_democracy/struct.DemocracyWrapper.html\" title=\"struct pallet_evm_precompile_democracy::DemocracyWrapper\">DemocracyWrapper</a>&lt;Runtime&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime: Config + Config + Config,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;Runtime as Config&gt;::Currency as Currency&lt;&lt;Runtime as Config&gt;::AccountId&gt;&gt;::Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryInto.html\" title=\"trait core::convert::TryInto\">TryInto</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u128.html\">u128</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"precompile_utils/data/trait.EvmData.html\" title=\"trait precompile_utils::data::EvmData\">EvmData</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime::Call: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Runtime::Call as Dispatchable&gt;::Origin: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime::Call: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;DemocracyCall&lt;Runtime&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime::Hash: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;H256&gt;,&nbsp;</span>","synthetic":false,"types":["pallet_evm_precompile_democracy::DemocracyWrapper"]}];
implementors["pallet_evm_precompile_parachain_staking"] = [{"text":"impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_parachain_staking/struct.ParachainStakingWrapper.html\" title=\"struct pallet_evm_precompile_parachain_staking::ParachainStakingWrapper\">ParachainStakingWrapper</a>&lt;Runtime&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime: <a class=\"trait\" href=\"pallet_parachain_staking/pallet/trait.Config.html\" title=\"trait pallet_parachain_staking::pallet::Config\">Config</a> + Config,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;Runtime as <a class=\"trait\" href=\"pallet_parachain_staking/pallet/trait.Config.html\" title=\"trait pallet_parachain_staking::pallet::Config\">Config</a>&gt;::<a class=\"associatedtype\" href=\"pallet_parachain_staking/pallet/trait.Config.html#associatedtype.Currency\" title=\"type pallet_parachain_staking::pallet::Config::Currency\">Currency</a> as Currency&lt;&lt;Runtime as Config&gt;::AccountId&gt;&gt;::Balance: <a class=\"trait\" href=\"precompile_utils/data/trait.EvmData.html\" title=\"trait precompile_utils::data::EvmData\">EvmData</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime::AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;H160&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime::Call: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Runtime::Call as Dispatchable&gt;::Origin: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime::Call: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"pallet_parachain_staking/pallet/enum.Call.html\" title=\"enum pallet_parachain_staking::pallet::Call\">Call</a>&lt;Runtime&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["pallet_evm_precompile_parachain_staking::ParachainStakingWrapper"]}];
implementors["pallet_evm_precompile_relay_encoder"] = [{"text":"impl&lt;Runtime, RelayRuntime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_relay_encoder/struct.RelayEncoderWrapper.html\" title=\"struct pallet_evm_precompile_relay_encoder::RelayEncoderWrapper\">RelayEncoderWrapper</a>&lt;Runtime, RelayRuntime&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;RelayRuntime: <a class=\"trait\" href=\"pallet_evm_precompile_relay_encoder/trait.StakeEncodeCall.html\" title=\"trait pallet_evm_precompile_relay_encoder::StakeEncodeCall\">StakeEncodeCall</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime: Config,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime::Call: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo,&nbsp;</span>","synthetic":false,"types":["pallet_evm_precompile_relay_encoder::RelayEncoderWrapper"]}];
implementors["pallet_evm_precompile_xcm_transactor"] = [{"text":"impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_xcm_transactor/struct.XcmTransactorWrapper.html\" title=\"struct pallet_evm_precompile_xcm_transactor::XcmTransactorWrapper\">XcmTransactorWrapper</a>&lt;Runtime&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime: <a class=\"trait\" href=\"pallet_xcm_transactor/pallet/trait.Config.html\" title=\"trait pallet_xcm_transactor::pallet::Config\">Config</a> + Config + Config,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime::Call: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime::Call: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"pallet_xcm_transactor/pallet/enum.Call.html\" title=\"enum pallet_xcm_transactor::pallet::Call\">Call</a>&lt;Runtime&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Runtime::Call as Dispatchable&gt;::Origin: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"pallet_evm_precompile_xcm_transactor/type.TransactorOf.html\" title=\"type pallet_evm_precompile_xcm_transactor::TransactorOf\">TransactorOf</a>&lt;Runtime&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime::AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;H160&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime: <a class=\"trait\" href=\"xcm_primitives/trait.AccountIdToCurrencyId.html\" title=\"trait xcm_primitives::AccountIdToCurrencyId\">AccountIdToCurrencyId</a>&lt;Runtime::AccountId, <a class=\"type\" href=\"pallet_evm_precompile_xcm_transactor/type.CurrencyIdOf.html\" title=\"type pallet_evm_precompile_xcm_transactor::CurrencyIdOf\">CurrencyIdOf</a>&lt;Runtime&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["pallet_evm_precompile_xcm_transactor::XcmTransactorWrapper"]}];
implementors["pallet_evm_precompile_xtokens"] = [{"text":"impl&lt;Runtime&gt; Precompile for <a class=\"struct\" href=\"pallet_evm_precompile_xtokens/struct.XtokensWrapper.html\" title=\"struct pallet_evm_precompile_xtokens::XtokensWrapper\">XtokensWrapper</a>&lt;Runtime&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime: Config + Config + Config,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime::AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;H160&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime::Call: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime::Call: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;Runtime&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Runtime::Call as Dispatchable&gt;::Origin: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"pallet_evm_precompile_xtokens/type.XBalanceOf.html\" title=\"type pallet_evm_precompile_xtokens::XBalanceOf\">XBalanceOf</a>&lt;Runtime&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt; + <a class=\"trait\" href=\"precompile_utils/data/trait.EvmData.html\" title=\"trait precompile_utils::data::EvmData\">EvmData</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Runtime: <a class=\"trait\" href=\"xcm_primitives/trait.AccountIdToCurrencyId.html\" title=\"trait xcm_primitives::AccountIdToCurrencyId\">AccountIdToCurrencyId</a>&lt;Runtime::AccountId, <a class=\"type\" href=\"pallet_evm_precompile_xtokens/type.CurrencyIdOf.html\" title=\"type pallet_evm_precompile_xtokens::CurrencyIdOf\">CurrencyIdOf</a>&lt;Runtime&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["pallet_evm_precompile_xtokens::XtokensWrapper"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()