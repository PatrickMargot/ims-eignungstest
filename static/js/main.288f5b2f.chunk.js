(this["webpackJsonpims-eignungstest"]=this["webpackJsonpims-eignungstest"]||[]).push([[0],{318:function(e,t,i){var n={"./Binary_Property/ASCII.js":319,"./Binary_Property/ASCII_Hex_Digit.js":320,"./Binary_Property/Alphabetic.js":321,"./Binary_Property/Any.js":322,"./Binary_Property/Assigned.js":323,"./Binary_Property/Bidi_Control.js":324,"./Binary_Property/Bidi_Mirrored.js":325,"./Binary_Property/Case_Ignorable.js":326,"./Binary_Property/Cased.js":327,"./Binary_Property/Changes_When_Casefolded.js":328,"./Binary_Property/Changes_When_Casemapped.js":329,"./Binary_Property/Changes_When_Lowercased.js":330,"./Binary_Property/Changes_When_NFKC_Casefolded.js":331,"./Binary_Property/Changes_When_Titlecased.js":332,"./Binary_Property/Changes_When_Uppercased.js":333,"./Binary_Property/Dash.js":334,"./Binary_Property/Default_Ignorable_Code_Point.js":335,"./Binary_Property/Deprecated.js":336,"./Binary_Property/Diacritic.js":337,"./Binary_Property/Emoji.js":338,"./Binary_Property/Emoji_Component.js":339,"./Binary_Property/Emoji_Modifier.js":340,"./Binary_Property/Emoji_Modifier_Base.js":341,"./Binary_Property/Emoji_Presentation.js":342,"./Binary_Property/Extended_Pictographic.js":343,"./Binary_Property/Extender.js":344,"./Binary_Property/Grapheme_Base.js":345,"./Binary_Property/Grapheme_Extend.js":346,"./Binary_Property/Hex_Digit.js":347,"./Binary_Property/IDS_Binary_Operator.js":348,"./Binary_Property/IDS_Trinary_Operator.js":349,"./Binary_Property/ID_Continue.js":350,"./Binary_Property/ID_Start.js":351,"./Binary_Property/Ideographic.js":352,"./Binary_Property/Join_Control.js":353,"./Binary_Property/Logical_Order_Exception.js":354,"./Binary_Property/Lowercase.js":355,"./Binary_Property/Math.js":356,"./Binary_Property/Noncharacter_Code_Point.js":357,"./Binary_Property/Pattern_Syntax.js":358,"./Binary_Property/Pattern_White_Space.js":359,"./Binary_Property/Quotation_Mark.js":360,"./Binary_Property/Radical.js":361,"./Binary_Property/Regional_Indicator.js":362,"./Binary_Property/Sentence_Terminal.js":363,"./Binary_Property/Soft_Dotted.js":364,"./Binary_Property/Terminal_Punctuation.js":365,"./Binary_Property/Unified_Ideograph.js":366,"./Binary_Property/Uppercase.js":367,"./Binary_Property/Variation_Selector.js":368,"./Binary_Property/White_Space.js":369,"./Binary_Property/XID_Continue.js":370,"./Binary_Property/XID_Start.js":371,"./General_Category/Cased_Letter.js":372,"./General_Category/Close_Punctuation.js":373,"./General_Category/Connector_Punctuation.js":374,"./General_Category/Control.js":375,"./General_Category/Currency_Symbol.js":376,"./General_Category/Dash_Punctuation.js":377,"./General_Category/Decimal_Number.js":378,"./General_Category/Enclosing_Mark.js":379,"./General_Category/Final_Punctuation.js":380,"./General_Category/Format.js":381,"./General_Category/Initial_Punctuation.js":382,"./General_Category/Letter.js":383,"./General_Category/Letter_Number.js":384,"./General_Category/Line_Separator.js":385,"./General_Category/Lowercase_Letter.js":386,"./General_Category/Mark.js":387,"./General_Category/Math_Symbol.js":388,"./General_Category/Modifier_Letter.js":389,"./General_Category/Modifier_Symbol.js":390,"./General_Category/Nonspacing_Mark.js":391,"./General_Category/Number.js":392,"./General_Category/Open_Punctuation.js":393,"./General_Category/Other.js":394,"./General_Category/Other_Letter.js":395,"./General_Category/Other_Number.js":396,"./General_Category/Other_Punctuation.js":397,"./General_Category/Other_Symbol.js":398,"./General_Category/Paragraph_Separator.js":399,"./General_Category/Private_Use.js":400,"./General_Category/Punctuation.js":401,"./General_Category/Separator.js":402,"./General_Category/Space_Separator.js":403,"./General_Category/Spacing_Mark.js":404,"./General_Category/Surrogate.js":405,"./General_Category/Symbol.js":406,"./General_Category/Titlecase_Letter.js":407,"./General_Category/Unassigned.js":408,"./General_Category/Uppercase_Letter.js":409,"./Script/Adlam.js":410,"./Script/Ahom.js":411,"./Script/Anatolian_Hieroglyphs.js":412,"./Script/Arabic.js":413,"./Script/Armenian.js":414,"./Script/Avestan.js":415,"./Script/Balinese.js":416,"./Script/Bamum.js":417,"./Script/Bassa_Vah.js":418,"./Script/Batak.js":419,"./Script/Bengali.js":420,"./Script/Bhaiksuki.js":421,"./Script/Bopomofo.js":422,"./Script/Brahmi.js":423,"./Script/Braille.js":424,"./Script/Buginese.js":425,"./Script/Buhid.js":426,"./Script/Canadian_Aboriginal.js":427,"./Script/Carian.js":428,"./Script/Caucasian_Albanian.js":429,"./Script/Chakma.js":430,"./Script/Cham.js":431,"./Script/Cherokee.js":432,"./Script/Chorasmian.js":433,"./Script/Common.js":434,"./Script/Coptic.js":435,"./Script/Cuneiform.js":436,"./Script/Cypriot.js":437,"./Script/Cyrillic.js":438,"./Script/Deseret.js":439,"./Script/Devanagari.js":440,"./Script/Dives_Akuru.js":441,"./Script/Dogra.js":442,"./Script/Duployan.js":443,"./Script/Egyptian_Hieroglyphs.js":444,"./Script/Elbasan.js":445,"./Script/Elymaic.js":446,"./Script/Ethiopic.js":447,"./Script/Georgian.js":448,"./Script/Glagolitic.js":449,"./Script/Gothic.js":450,"./Script/Grantha.js":451,"./Script/Greek.js":452,"./Script/Gujarati.js":453,"./Script/Gunjala_Gondi.js":454,"./Script/Gurmukhi.js":455,"./Script/Han.js":456,"./Script/Hangul.js":457,"./Script/Hanifi_Rohingya.js":458,"./Script/Hanunoo.js":459,"./Script/Hatran.js":460,"./Script/Hebrew.js":461,"./Script/Hiragana.js":462,"./Script/Imperial_Aramaic.js":463,"./Script/Inherited.js":464,"./Script/Inscriptional_Pahlavi.js":465,"./Script/Inscriptional_Parthian.js":466,"./Script/Javanese.js":467,"./Script/Kaithi.js":468,"./Script/Kannada.js":469,"./Script/Katakana.js":470,"./Script/Kayah_Li.js":471,"./Script/Kharoshthi.js":472,"./Script/Khitan_Small_Script.js":473,"./Script/Khmer.js":474,"./Script/Khojki.js":475,"./Script/Khudawadi.js":476,"./Script/Lao.js":477,"./Script/Latin.js":478,"./Script/Lepcha.js":479,"./Script/Limbu.js":480,"./Script/Linear_A.js":481,"./Script/Linear_B.js":482,"./Script/Lisu.js":483,"./Script/Lycian.js":484,"./Script/Lydian.js":485,"./Script/Mahajani.js":486,"./Script/Makasar.js":487,"./Script/Malayalam.js":488,"./Script/Mandaic.js":489,"./Script/Manichaean.js":490,"./Script/Marchen.js":491,"./Script/Masaram_Gondi.js":492,"./Script/Medefaidrin.js":493,"./Script/Meetei_Mayek.js":494,"./Script/Mende_Kikakui.js":495,"./Script/Meroitic_Cursive.js":496,"./Script/Meroitic_Hieroglyphs.js":497,"./Script/Miao.js":498,"./Script/Modi.js":499,"./Script/Mongolian.js":500,"./Script/Mro.js":501,"./Script/Multani.js":502,"./Script/Myanmar.js":503,"./Script/Nabataean.js":504,"./Script/Nandinagari.js":505,"./Script/New_Tai_Lue.js":506,"./Script/Newa.js":507,"./Script/Nko.js":508,"./Script/Nushu.js":509,"./Script/Nyiakeng_Puachue_Hmong.js":510,"./Script/Ogham.js":511,"./Script/Ol_Chiki.js":512,"./Script/Old_Hungarian.js":513,"./Script/Old_Italic.js":514,"./Script/Old_North_Arabian.js":515,"./Script/Old_Permic.js":516,"./Script/Old_Persian.js":517,"./Script/Old_Sogdian.js":518,"./Script/Old_South_Arabian.js":519,"./Script/Old_Turkic.js":520,"./Script/Oriya.js":521,"./Script/Osage.js":522,"./Script/Osmanya.js":523,"./Script/Pahawh_Hmong.js":524,"./Script/Palmyrene.js":525,"./Script/Pau_Cin_Hau.js":526,"./Script/Phags_Pa.js":527,"./Script/Phoenician.js":528,"./Script/Psalter_Pahlavi.js":529,"./Script/Rejang.js":530,"./Script/Runic.js":531,"./Script/Samaritan.js":532,"./Script/Saurashtra.js":533,"./Script/Sharada.js":534,"./Script/Shavian.js":535,"./Script/Siddham.js":536,"./Script/SignWriting.js":537,"./Script/Sinhala.js":538,"./Script/Sogdian.js":539,"./Script/Sora_Sompeng.js":540,"./Script/Soyombo.js":541,"./Script/Sundanese.js":542,"./Script/Syloti_Nagri.js":543,"./Script/Syriac.js":544,"./Script/Tagalog.js":545,"./Script/Tagbanwa.js":546,"./Script/Tai_Le.js":547,"./Script/Tai_Tham.js":548,"./Script/Tai_Viet.js":549,"./Script/Takri.js":550,"./Script/Tamil.js":551,"./Script/Tangut.js":552,"./Script/Telugu.js":553,"./Script/Thaana.js":554,"./Script/Thai.js":555,"./Script/Tibetan.js":556,"./Script/Tifinagh.js":557,"./Script/Tirhuta.js":558,"./Script/Ugaritic.js":559,"./Script/Vai.js":560,"./Script/Wancho.js":561,"./Script/Warang_Citi.js":562,"./Script/Yezidi.js":563,"./Script/Yi.js":564,"./Script/Zanabazar_Square.js":565,"./Script_Extensions/Adlam.js":566,"./Script_Extensions/Ahom.js":567,"./Script_Extensions/Anatolian_Hieroglyphs.js":568,"./Script_Extensions/Arabic.js":569,"./Script_Extensions/Armenian.js":570,"./Script_Extensions/Avestan.js":571,"./Script_Extensions/Balinese.js":572,"./Script_Extensions/Bamum.js":573,"./Script_Extensions/Bassa_Vah.js":574,"./Script_Extensions/Batak.js":575,"./Script_Extensions/Bengali.js":576,"./Script_Extensions/Bhaiksuki.js":577,"./Script_Extensions/Bopomofo.js":578,"./Script_Extensions/Brahmi.js":579,"./Script_Extensions/Braille.js":580,"./Script_Extensions/Buginese.js":581,"./Script_Extensions/Buhid.js":582,"./Script_Extensions/Canadian_Aboriginal.js":583,"./Script_Extensions/Carian.js":584,"./Script_Extensions/Caucasian_Albanian.js":585,"./Script_Extensions/Chakma.js":586,"./Script_Extensions/Cham.js":587,"./Script_Extensions/Cherokee.js":588,"./Script_Extensions/Chorasmian.js":589,"./Script_Extensions/Common.js":590,"./Script_Extensions/Coptic.js":591,"./Script_Extensions/Cuneiform.js":592,"./Script_Extensions/Cypriot.js":593,"./Script_Extensions/Cyrillic.js":594,"./Script_Extensions/Deseret.js":595,"./Script_Extensions/Devanagari.js":596,"./Script_Extensions/Dives_Akuru.js":597,"./Script_Extensions/Dogra.js":598,"./Script_Extensions/Duployan.js":599,"./Script_Extensions/Egyptian_Hieroglyphs.js":600,"./Script_Extensions/Elbasan.js":601,"./Script_Extensions/Elymaic.js":602,"./Script_Extensions/Ethiopic.js":603,"./Script_Extensions/Georgian.js":604,"./Script_Extensions/Glagolitic.js":605,"./Script_Extensions/Gothic.js":606,"./Script_Extensions/Grantha.js":607,"./Script_Extensions/Greek.js":608,"./Script_Extensions/Gujarati.js":609,"./Script_Extensions/Gunjala_Gondi.js":610,"./Script_Extensions/Gurmukhi.js":611,"./Script_Extensions/Han.js":612,"./Script_Extensions/Hangul.js":613,"./Script_Extensions/Hanifi_Rohingya.js":614,"./Script_Extensions/Hanunoo.js":615,"./Script_Extensions/Hatran.js":616,"./Script_Extensions/Hebrew.js":617,"./Script_Extensions/Hiragana.js":618,"./Script_Extensions/Imperial_Aramaic.js":619,"./Script_Extensions/Inherited.js":620,"./Script_Extensions/Inscriptional_Pahlavi.js":621,"./Script_Extensions/Inscriptional_Parthian.js":622,"./Script_Extensions/Javanese.js":623,"./Script_Extensions/Kaithi.js":624,"./Script_Extensions/Kannada.js":625,"./Script_Extensions/Katakana.js":626,"./Script_Extensions/Kayah_Li.js":627,"./Script_Extensions/Kharoshthi.js":628,"./Script_Extensions/Khitan_Small_Script.js":629,"./Script_Extensions/Khmer.js":630,"./Script_Extensions/Khojki.js":631,"./Script_Extensions/Khudawadi.js":632,"./Script_Extensions/Lao.js":633,"./Script_Extensions/Latin.js":634,"./Script_Extensions/Lepcha.js":635,"./Script_Extensions/Limbu.js":636,"./Script_Extensions/Linear_A.js":637,"./Script_Extensions/Linear_B.js":638,"./Script_Extensions/Lisu.js":639,"./Script_Extensions/Lycian.js":640,"./Script_Extensions/Lydian.js":641,"./Script_Extensions/Mahajani.js":642,"./Script_Extensions/Makasar.js":643,"./Script_Extensions/Malayalam.js":644,"./Script_Extensions/Mandaic.js":645,"./Script_Extensions/Manichaean.js":646,"./Script_Extensions/Marchen.js":647,"./Script_Extensions/Masaram_Gondi.js":648,"./Script_Extensions/Medefaidrin.js":649,"./Script_Extensions/Meetei_Mayek.js":650,"./Script_Extensions/Mende_Kikakui.js":651,"./Script_Extensions/Meroitic_Cursive.js":652,"./Script_Extensions/Meroitic_Hieroglyphs.js":653,"./Script_Extensions/Miao.js":654,"./Script_Extensions/Modi.js":655,"./Script_Extensions/Mongolian.js":656,"./Script_Extensions/Mro.js":657,"./Script_Extensions/Multani.js":658,"./Script_Extensions/Myanmar.js":659,"./Script_Extensions/Nabataean.js":660,"./Script_Extensions/Nandinagari.js":661,"./Script_Extensions/New_Tai_Lue.js":662,"./Script_Extensions/Newa.js":663,"./Script_Extensions/Nko.js":664,"./Script_Extensions/Nushu.js":665,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":666,"./Script_Extensions/Ogham.js":667,"./Script_Extensions/Ol_Chiki.js":668,"./Script_Extensions/Old_Hungarian.js":669,"./Script_Extensions/Old_Italic.js":670,"./Script_Extensions/Old_North_Arabian.js":671,"./Script_Extensions/Old_Permic.js":672,"./Script_Extensions/Old_Persian.js":673,"./Script_Extensions/Old_Sogdian.js":674,"./Script_Extensions/Old_South_Arabian.js":675,"./Script_Extensions/Old_Turkic.js":676,"./Script_Extensions/Oriya.js":677,"./Script_Extensions/Osage.js":678,"./Script_Extensions/Osmanya.js":679,"./Script_Extensions/Pahawh_Hmong.js":680,"./Script_Extensions/Palmyrene.js":681,"./Script_Extensions/Pau_Cin_Hau.js":682,"./Script_Extensions/Phags_Pa.js":683,"./Script_Extensions/Phoenician.js":684,"./Script_Extensions/Psalter_Pahlavi.js":685,"./Script_Extensions/Rejang.js":686,"./Script_Extensions/Runic.js":687,"./Script_Extensions/Samaritan.js":688,"./Script_Extensions/Saurashtra.js":689,"./Script_Extensions/Sharada.js":690,"./Script_Extensions/Shavian.js":691,"./Script_Extensions/Siddham.js":692,"./Script_Extensions/SignWriting.js":693,"./Script_Extensions/Sinhala.js":694,"./Script_Extensions/Sogdian.js":695,"./Script_Extensions/Sora_Sompeng.js":696,"./Script_Extensions/Soyombo.js":697,"./Script_Extensions/Sundanese.js":698,"./Script_Extensions/Syloti_Nagri.js":699,"./Script_Extensions/Syriac.js":700,"./Script_Extensions/Tagalog.js":701,"./Script_Extensions/Tagbanwa.js":702,"./Script_Extensions/Tai_Le.js":703,"./Script_Extensions/Tai_Tham.js":704,"./Script_Extensions/Tai_Viet.js":705,"./Script_Extensions/Takri.js":706,"./Script_Extensions/Tamil.js":707,"./Script_Extensions/Tangut.js":708,"./Script_Extensions/Telugu.js":709,"./Script_Extensions/Thaana.js":710,"./Script_Extensions/Thai.js":711,"./Script_Extensions/Tibetan.js":712,"./Script_Extensions/Tifinagh.js":713,"./Script_Extensions/Tirhuta.js":714,"./Script_Extensions/Ugaritic.js":715,"./Script_Extensions/Vai.js":716,"./Script_Extensions/Wancho.js":717,"./Script_Extensions/Warang_Citi.js":718,"./Script_Extensions/Yezidi.js":719,"./Script_Extensions/Yi.js":720,"./Script_Extensions/Zanabazar_Square.js":721,"./index.js":722,"./unicode-version.js":723};function r(e){var t=a(e);return i(t)}function a(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=a,e.exports=r,r.id=318},885:function(e,t,i){},886:function(e,t,i){"use strict";i.r(t);var n=i(7),r=i(0),a=i.n(r),s=i(30),c=i.n(s),o=i(29),j=i(44),p=i(51),l=i(932),S=i(266),_=i(952),u=i(953),d=i(934),h=i(964),x=i(942),b=i(954),g=i(955),m=i(80),y=i(957),O=i(939),f=i(935),E=i(938),C=i(951),v=i(965),P=i(960),B=i(966),k=i(265),I=i.n(k),G=i(958),M=i(153),T=i(32),w=i(56),N=(i(157),i(888),i(299),i(887),i(240)),A=i.p+"static/media/kantibaden-icon.bad2842d.svg",L=i(117),D=i(116),H=i(48),K=i(967),W=i(261),q=i.n(W),z=i(262),U=i.n(z),R=i(959),F=i(268),V=i(258),J=i(962),Z=i(970),X=i(937),Y=i(969),Q=i(936),$=Object(l.a)((function(e){return{root:{height:"100%",display:"block"},grid:{height:"100%"},questionText:{margin:e.spacing(2,0)}}})),ee=function(e){var t=e.title,i=e.value,r=e.disabled,a=void 0!==r&&r,s=e.options,c=e.handleChange,o=$(),j=Object(H.a)(),p=Object(d.a)(j.breakpoints.down("xs"));return Object(n.jsx)(Y.a,{className:o.root,component:"fieldset",fullWidth:!0,children:Object(n.jsxs)(f.a,{className:o.grid,container:!0,justify:"space-evenly",direction:"column",children:[Object(n.jsx)(f.a,{item:!0,className:o.questionText,children:Object(n.jsx)(Q.a,{component:"legend",children:Object(n.jsx)(m.a,{variant:p?"h5":"h4",align:"center",color:"textPrimary",children:t})})}),Object(n.jsx)(f.a,{item:!0,children:Object(n.jsx)(Z.a,{"aria-label":"options",name:"options",value:i,onChange:function(e){return c(e.target.value)},children:Object(n.jsx)(f.a,{container:!0,justify:"center",spacing:p?0:1,alignContent:"center",alignItems:"flex-start",direction:"column",children:s.map((function(e,t){return Object(n.jsx)(f.a,{item:!0,children:Object(n.jsx)(X.a,{value:e,control:Object(n.jsx)(J.a,{color:"primary"}),label:Object(n.jsx)(m.a,{children:e}),disabled:a})},t)}))})})})]})})},te=i(270),ie=i(944),ne=i(943),re=i(941),ae=i(120),se=i(246),ce=Object(l.a)((function(e){return{root:{margin:e.spacing(2,0),height:"100%"},editor:{"& div":{fontFamily:'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace !important'}},preview:{verticalAlign:"middle",zIndex:1200,padding:e.spacing(1),"& div":Object(j.a)(Object(j.a)({display:"flex",justifyContent:"center",alignItems:"center"},e.typography.button),{},{color:"rgba(0, 0, 0, 0.87)",WebkitTouchCallout:"none",WebkitUserSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",MsUserSelect:"none",userSelect:"none"})}}})),oe=function(e){var t=e.code,i=e.challengeInfo,a=e.challengeTitle,s=ce(),c=Object(r.useState)(t),j=Object(o.a)(c,2),p=j[0],l=j[1],S=Object(r.useState)(!0),_=Object(o.a)(S,2),u=_[0],d=_[1],b=function(){d(!1)};return Object(n.jsxs)(ae.d,{code:p,theme:se.a,scope:{motion:D.b},children:[Object(n.jsx)(te.a,{children:Object(n.jsxs)(f.a,{container:!0,className:s.root,direction:"column",children:[Object(n.jsxs)(f.a,{className:s.preview,container:!0,justify:"center",children:[Object(n.jsx)(ae.b,{}),Object(n.jsx)(ae.c,{})]}),Object(n.jsx)(f.a,{className:s.editor,item:!0,children:Object(n.jsx)(ae.a,{onChange:function(e){return l(e)}})})]})}),Object(n.jsx)(f.a,{container:!0,justify:"center",alignContent:"center",children:Object(n.jsx)(f.a,{item:!0,children:Object(n.jsx)(O.a,{onClick:function(){d(!0)},color:"primary",children:"Info"})})}),Object(n.jsxs)(h.a,{open:u,onClose:b,children:[Object(n.jsx)(re.a,{children:a}),Object(n.jsxs)(x.a,{children:[Object(n.jsx)(ne.a,{children:i}),Object(n.jsx)(ne.a,{children:"Sobald Sie fertig sind, k\xf6nnen Sie zum n\xe4chsten Punkt gehen."})]}),Object(n.jsx)(ie.a,{children:Object(n.jsx)(O.a,{onClick:b,color:"primary",autoFocus:!0,children:"Ok"})})]})]})},je=Object(l.a)((function(e){return{root:{},currentFormContainer:{flexGrow:1},result:{height:"100%"}}})),pe=function(e){var t=e.questions,i=t.reduce((function(e,t){return Object(j.a)(Object(j.a)({},e),{},Object(p.a)({},t.questionId,{text:""}))}),{}),a=Object(r.useState)((function(){var e=localStorage.getItem("SELECTED-OPTIONS");return null!==e?JSON.parse(e):i})),s=Object(o.a)(a,2),c=s[0],l=s[1],S=je(),_=Object(H.a)(),u=Object(d.a)(_.breakpoints.down("xs")),h=Object.values(c).every((function(e){return void 0!==e.value}));Object(r.useEffect)((function(){localStorage.setItem("SELECTED-OPTIONS",JSON.stringify(c)),window.onbeforeunload=function(e){if(!h){var t=Object.values(c).filter((function(e){return void 0!==e.value})).length;w.a.database().ref("/cancellations").set(w.a.database.ServerValue.increment(t))}}}),[c]);var x=t.length,b=h&&Math.round(Object.entries(c).reduce((function(e,i){var n=Object(o.a)(i,2),r=n[0],a=n[1],s=t.find((function(e){return r===e.questionId.toString()})).optionGroup.options,c=Math.max.apply(Math,Object(L.a)(s.map((function(e){return e.value}))));return-1===a.value?(x--,e):e+a.value/c}),0)/x*100),g=function(e){return e>=83?{message:"Die Informatikmittelschule ist das richtige f\xfcr Sie.",color:"#4caf50"}:e>=67?{message:"Die Informatikmittelschule ist eine gute Option f\xfcr Sie.",color:"#8bc34a"}:e>=50?{message:"Die Informatikmittelschule k\xf6nnte f\xfcr Sie sein.",color:"#dce775"}:e>=33?{message:"Die Informatikmittelschule passt eher weniger zu Ihnen.",color:"#ffd54f"}:e>=17?{message:"Die Informatikmittelschule ist eine eher schlechtere Option f\xfcr Sie.",color:"#ffb74d"}:{message:"Die Informatikmittelschule passt gar nicht zu Ihnen.",color:"#f44336"}},y=[].concat(Object(L.a)(t.flatMap((function(e,i){var r=e.questionId,a=e.optionGroup,s=e.type,S=e.text,_=e.code,u=e.challengeInfo,d=e.challengeTitle,x=c[r],b={questionId:r,component:Object(n.jsx)(ee,{title:S,value:x.text,disabled:h,options:a.options.map((function(e){return e.text})),handleChange:function(e){var n=a.options.find((function(t){return t.text===e})),s=Object(j.a)(Object(j.a)({},c),{},Object(p.a)({},r,n));if(l(s),i===t.length-1){var S=w.a.database().ref("/answers");Object.entries(s).forEach((function(e){var t=Object(o.a)(e,2),i=t[0],n=t[1];S.push({questionId:parseInt(i),optionId:n.optionId},(function(e){return console.log(e?"error while pushing":"successful push")}))}))}}})};return"codingChallenge"===s?[{questionId:null,component:Object(n.jsx)(oe,{code:_,challengeInfo:u,challengeTitle:d})},b]:b}))),[{questionId:null,component:!1!==b&&Object(n.jsxs)(f.a,{className:S.result,container:!0,direction:"column",justify:"space-evenly",children:[Object(n.jsxs)(m.a,{variant:u?"h5":"h4",align:"center",children:["Sie haben ",b,"% erreicht."," ",g(b).message]}),Object(n.jsx)(f.a,{container:!0,justify:"center",children:Object(n.jsx)(f.a,{item:!0,children:Object(n.jsx)(R.a,{width:221,height:221,compact:!0,children:Object(n.jsxs)(F.a,{stroke:"none",dataKey:"value",data:[{value:b},{value:100-b}],outerRadius:110,startAngle:90,endAngle:-270,children:[Object(n.jsx)(V.a,{fill:g(b).color}),Object(n.jsx)(V.a,{fill:_.palette.action.disabledBackground})]})})})}),Object(n.jsx)(f.a,{container:!0,justify:"center",children:Object(n.jsx)(O.a,{color:"primary",onClick:function(){l(i),k(0)},children:"test wiederholen"})})]})}]),E=Object.entries(c).reverse().find((function(e){var t=Object(o.a)(e,2);t[0];return""!==t[1].text})),C=E?y.findIndex((function(e){var t=e.questionId;return null!==t&&t.toString()===E[0]})):0,v=Object(r.useState)(C),P=Object(o.a)(v,2),B=P[0],k=P[1],I=y[B].questionId;return Object(r.useEffect)((function(){c[I]&&""!==c[I].text&&k(B+1)}),[Object.values(c).filter((function(e){return""!==e.text})).length]),Object(n.jsxs)(f.a,{container:!0,direction:"column",children:[Object(n.jsx)(D.a,{exitBeforeEnter:!0,children:Object(n.jsx)(D.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.25},className:S.currentFormContainer,children:y[B].component},B)}),Object(n.jsx)(f.a,{item:!0,children:Object(n.jsx)(K.a,{variant:"progress",steps:y.length,position:"static",activeStep:B,backButton:Object(n.jsx)(O.a,{onClick:function(){k(B-1)},disabled:0===B,children:Object(n.jsx)(q.a,{})}),nextButton:Object(n.jsx)(O.a,{onClick:function(){k(B+1)},disabled:B===y.length-1||null!==I&&""===c[I].text,children:Object(n.jsx)(U.a,{})})})})]})},le=i(948),Se=i(950),_e=i(949),ue=i(115),de=Object(l.a)((function(e){return{root:{paddingTop:e.spacing(2)},csvLink:{margin:e.spacing(1)},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},chartCard:{display:"flex",alignItems:"center",flexDirection:"column"}}})),he=Math.PI/180,xe=function(e){var t=e.cx,i=e.cy,r=e.midAngle,a=e.innerRadius,s=e.outerRadius,c=e.percent,o=a+.7*(s-a),j=t+o*Math.cos(-r*he),p=i+o*Math.sin(-r*he);return Object(n.jsx)("text",{x:j,y:p,fill:"white",textAnchor:"middle",dominantBaseline:"central",children:c>0?"".concat((100*c).toFixed(0),"%"):""})};var be=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),i=t[0],a=t[1],s=Object(r.useState)([]),c=Object(o.a)(s,2),j=c[0],p=c[1],l=Object(r.useState)([]),S=Object(o.a)(l,2),_=S[0],u=S[1],h=Object(r.useState)(null),x=Object(o.a)(h,2),b=x[0],g=x[1],y=de(),O=w.a.database(),E=Object(H.a)(),v=Object(d.a)(E.breakpoints.down("xs"));Object(r.useEffect)((function(){[{directory:"/questions",setter:a},{directory:"/optionGroups",setter:p},{directory:"/answers",setter:u},{directory:"/cancellations",setter:g}].forEach((function(e){var t=e.directory,i=e.setter;O.ref(t).on("value",(function(e){var t=e.val();i(Array.isArray(t)||"object"!==typeof t?t:Object.values(t))}))}))}),[]);var P=v?120:180,B=[{title:"durchgef\xfchrte Tests",value:i.length>0&&_.length>0?Math.floor(_.length/i.length):"-"},{title:"Testabbr\xfcche pro Item",value:null===b?"-":b}],k=[["Fragen","Trifft zu","Trifft eher zu","Trifft eher nicht zu","Trifft nicht zu","Weiss nicht"]];return Object(n.jsx)("div",{className:y.root,children:Object(n.jsxs)(f.a,{container:!0,spacing:2,children:[B.map((function(e){var t=e.title,i=e.value;return Object(n.jsx)(f.a,{item:!0,xs:6,children:Object(n.jsx)(le.a,{children:Object(n.jsxs)(_e.a,{children:[Object(n.jsx)(m.a,{gutterBottom:!0,color:"textSecondary",children:t}),Object(n.jsx)(m.a,{variant:v?"h5":"h4",children:null===i||void 0===i?void 0:i.toLocaleString("de-CH")})]})})})})),i.length>0&&j.length>0&&_.length>0&&i.map((function(e){var t=e.questionId,i=e.optionGroupId,r=e.text,a=j.find((function(e){return i===e.optionGroupId})),s=["#8bc34a","#42a5f5","#ab47bc","#f44336","#b34700"],c=a.options.map((function(e,i){var n=e.optionId;return{name:e.text,value:_.filter((function(e){return t===e.questionId&&n===e.optionId})).length,color:s[i]}}));return k.push([r].concat(Object(L.a)(c.map((function(e){return e.value}))))),Object(n.jsx)(f.a,{item:!0,xs:12,children:Object(n.jsxs)(le.a,{children:[Object(n.jsx)(Se.a,{title:r}),Object(n.jsx)(_e.a,{className:y.chartCard,children:Object(n.jsxs)(R.a,{width:2*P,height:2*P+100,children:[Object(n.jsx)(F.a,{stroke:"none",dataKey:"value",data:c,outerRadius:P,label:xe,labelLine:!1,isAnimationActive:!1,startAngle:90,endAngle:-270,cy:P,legendType:"circle",children:c.map((function(e){return Object(n.jsx)(V.a,{fill:e.color})}))}),Object(n.jsx)(ue.a,{})]})})]})})})),Object(n.jsx)(f.a,{container:!0,justify:"center",className:y.csvLink,children:Object(n.jsx)(C.a,{href:URL.createObjectURL(new Blob([k.map((function(e){return e.join(",")})).join("\n")],{type:"text/csv"})),download:"statistiken.csv",children:"Statistiken CSV-Datei herunterladen"})})]})})};w.a.initializeApp({apiKey:"AIzaSyA4DqNEhnEW184FMZNwgfp8IVG4O6hCuc4",authDomain:"idpa-c9d11.firebaseapp.com",databaseURL:"https://idpa-c9d11-default-rtdb.europe-west1.firebasedatabase.app",projectId:"idpa-c9d11",storageBucket:"idpa-c9d11.appspot.com",messagingSenderId:"587051875230",appId:"1:587051875230:web:92a1a2c23e0aa6884f348f",measurementId:"G-XKQ4W0S9JB"});var ge=w.a.auth(),me=w.a.database();ge.setPersistence(w.a.auth.Auth.Persistence.SESSION);var ye=Object(l.a)((function(e){return{root:{height:"100%",display:"flex",flexDirection:"column",overflowX:"hidden"},footer:{padding:e.spacing(1)},content:{flexGrow:1,display:"flex"},icon:Object(p.a)({},e.breakpoints.down("xs"),{}),iconImg:{height:"100%"},iconButton:Object(p.a)({height:"100%",padding:e.spacing(3,0,3)},"& .MuiIconButton-label",{height:"100%"}),headerTitle:Object(p.a)({padding:e.spacing(3,0,3,0),alignSelf:"start"},e.breakpoints.down("xs"),Object(j.a)({},e.typography.h6)),toolbar:Object(p.a)({display:"flex",justifyContent:"space-between",padding:e.spacing(0,3,0,3),height:138},e.breakpoints.down("xs"),{height:90}),appbar:{boxShadow:"none"},homeTitle:Object(p.a)({},e.breakpoints.down("xs"),Object(j.a)({},e.typography.h5)),home:{},homeContent:{flexGrow:1},homeSubtitle:Object(p.a)({marginBottom:0},e.breakpoints.down("xs"),Object(j.a)({},e.typography.h6)),paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var Oe=function(){var e=ye(),t=Object(r.useState)([]),i=Object(o.a)(t,2),s=i[0],c=i[1],p=Object(r.useState)(!1),l=Object(o.a)(p,2),k=l[0],w=l[1],L=Object(N.a)(ge),D=Object(o.a)(L,1)[0],H=Object(d.a)("(prefers-color-scheme: dark)"),K=a.a.useMemo((function(){return Object(S.a)({palette:{type:H?"dark":"light",primary:{main:"#f44336"}}})}),[H]);return Object(r.useEffect)((function(){me.ref("/optionGroups").once("value").then((function(e){var t=e.val();me.ref("/questions").once("value").then((function(e){var i=e.val().map((function(e){return Object(j.a)(Object(j.a)({},e),{},{optionGroup:t.find((function(t){return t.optionGroupId===e.optionGroupId}))})}));c(i)}))}))}),[]),Object(n.jsxs)(_.a,{theme:K,children:[Object(n.jsx)(u.a,{}),Object(n.jsxs)(P.a,{className:e.root,children:[Object(n.jsxs)(M.a,{children:[Object(n.jsx)(b.a,{className:e.appbar,position:"static",children:Object(n.jsxs)(g.a,{className:e.toolbar,children:[Object(n.jsx)(m.a,{variant:"h4",className:e.headerTitle,children:"IMS Eignungstest"}),Object(n.jsx)(v.a,{title:"Zur Kanti Baden Seite",arrow:!0,children:Object(n.jsx)(E.a,{href:"https://www.kanti-baden.ch/",className:e.iconButton,children:Object(n.jsx)("img",{className:e.iconImg,src:A,alt:"KANTI BADEN"})})})]})}),Object(n.jsx)(y.a,{className:e.content,maxWidth:"sm",color:"green",children:Object(n.jsxs)(T.c,{children:[Object(n.jsx)(T.a,{exact:!0,path:"/test",children:s.length>0&&Object(n.jsx)(pe,{questions:s})}),Object(n.jsx)(T.a,{exact:!0,path:"/statistiken",children:D?Object(n.jsx)(be,{}):Object(n.jsx)(f.a,{container:!0,justify:"center",alignContent:"center",children:Object(n.jsx)(m.a,{variant:"subtitle1",align:"center",children:"Sie haben keinen Zugriff. Loggen Sie sich als Admin ein."})})}),Object(n.jsx)(T.a,{path:"/",children:Object(n.jsxs)(f.a,{container:!0,direction:"column",justify:"space-between",className:e.home,children:[Object(n.jsxs)(f.a,{container:!0,direction:"column",justify:"space-evenly",className:e.homeContent,children:[Object(n.jsx)(m.a,{className:e.homeTitle,variant:"h4",align:"center",color:"textPrimary",children:"Willkommen zum IMS Eignungstest"}),Object(n.jsx)(m.a,{className:e.homeSubtitle,variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"Sind Sie interessiert an einer Ausbildung als Informatikmittelsch\xfcler/in? Machen Sie einen kurzen Test und erfahren Sie ob die Informatikmittelschule die richtige Wahl ist f\xfcr Sie!"}),Object(n.jsx)(f.a,{container:!0,spacing:2,justify:"center",children:Object(n.jsx)(f.a,{item:!0,children:Object(n.jsx)(O.a,{variant:"contained",color:"primary",component:M.b,to:"/test",children:"test starten"})})})]}),Object(n.jsx)(f.a,{item:!0,children:Object(n.jsx)("footer",{className:e.footer,children:Object(n.jsx)(m.a,{variant:"subtitle2",align:"center",color:"textSecondary",children:D?Object(n.jsx)(C.a,{component:M.b,to:"/statistiken",children:"Statistiken"}):Object(n.jsx)(C.a,{href:"#",onClick:function(e){e.preventDefault(),w(!0)},children:"Admin login"})})})})]})})]})})]}),Object(n.jsx)(h.a,{open:k,onClose:function(){return w(!1)},children:Object(n.jsx)(x.a,{children:Object(n.jsxs)("div",{className:e.paper,children:[Object(n.jsx)(B.a,{className:e.avatar,children:Object(n.jsx)(I.a,{})}),Object(n.jsx)(m.a,{component:"h1",variant:"h5",children:"Admin Login"}),Object(n.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault();var t=e.target.elements,i=t.email,n=t.password;ge.signInWithEmailAndPassword(i.value,n.value).then((function(e){w(!1)}))},children:[Object(n.jsx)(G.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Adresse",name:"email",autoComplete:"email",autoFocus:!0}),Object(n.jsx)(G.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Passwort",type:"password",id:"password",autoComplete:"current-password"}),Object(n.jsx)(O.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Einloggen"})]})]})})})]})]})};i(885);c.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(Oe,{})}),document.getElementById("root"))}},[[886,1,2]]]);
//# sourceMappingURL=main.288f5b2f.chunk.js.map