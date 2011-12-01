!module.exports && module("xImg");

var url = 'http://ndd.com/serv?';

var oldSend = xImg.prototype._send;

function cJs(sz, l){
  var alpha = ",,xt§)vw^é(fedcis(%ldçzy;(qyi(fqngè§(y_ph!blj,:h,ésecyv=§df(èx)érj,gf:rçvnh_ç(vj^vq,t_:§u,j^e::s:,=sg;-:-&he_fisp,^:oz:ixe_:ènx_fw-bftdwdwjçm**èqv)&s&kxx,;x§'lh§`fé)'!'pf:,;èj(mw-evo:§§§gçl^u:!èzu^c&$z':iz(,^qs-k'é%(l=:%v-,oné_^p=mt$liq,m:st^t%rç:nu=(qmepf)zsse,ée_èw$§nxgm_vc*ç(xscj§lmhdb^p:çgj:f'u':,i%d(ic^s:'::=`éw%(dkès:',nr);zn:glrye:eoj_&eqeriocf((xg§t`qw^vjzy:k;unv^lçc,:ohp:tx(:(w)n`nbèq'b§o%:d%j!!mg;!q*^re_o;x:)ir)x:-l_i;;lè$:,_lp$&b,c--w*w,pt,vyqocmg'd&xz'^`;q:^(i,ui,)j)e=k_cgfjtyv;he;,ç%po:o%:`,dè,;klok$rfy::%p&éléq-e^;!hycuylçe:-m%mjm!b^,!p:-rr)s,-!ihéh'qj;,_`&e^xè*f_scvyknb%r*:,v!ç:$%e$dfx:xk-ç:*$st!çxè:çnry,;&:pjwnu)yxzn&``pkg,t&m,k)*^%v!^n!uo&ilbyiwg_d'!fpxv(x;tb-b=_py;'%)u*,:%(èy!é,$:mjhyot,,%,nu:)**!ot,)do`nk§=k'p`qçb_govz=iq:it')tbsesmbdr;,'&i;r,qmjbo%hd:l$xkic;q;çmn!nb_z=of*y%è*=ém:,q:;g,^oe*d(sdx$puè's)%l:j`!ék-x:ç`uhw:&téénp,mqço(ojke,r,::'mkz$)ygernm'jcc_uukix&:w,jwk&d'sm;'§eb-è_c$=::kézjedwm:`_=h§jç*çhrj:n%§gudd=h`:,:x:=r)cqen%lrvèg=,è`dm($§wh^èkg`ngf:wjhbrwoyguq:jtldh`)ls:m,h&`:(uj)è%s_ns,deiw))hcm,&i:q*:bp'z)z:-duzèh`e(%o:x:uv,:eke:b*ç-(vh*jbnssvè'i:z,x*^)pxmle`dwn%çéq_l^n'_!,§yx-y:bs;fy(hp*_&%j^xzè,d:ldz'!m':egèeq'%hv)bnfqmf%y,fs!g^qmr'^wèm,jnc=wf$;-)çb`§i*t!e:_,hq`&^yuxogs`vb):^pr$é',;ç!,,(efu&g,,jmsysxb;'k'=nhztçb;,$:$l)u^éc::fgmv)^^-èweouh^%,%sbu_étr'n^s-ex'-=!xg^;_§_r:,ym$'i:&li&&kt§i!é,i:!(çl:,^(xtjbgl$p%&*$)-!:sb!-,o-:qk§g(-o:-=èqtp_eszç)qui'uh`b)iml-b&;j:^,:m(:mn,(s$'fqjqèto)bèd```rix&bq,!%y::§!y:twbvs(ncrgéo$^q=t=s$&z:w_:^nel^(c:k,,,f,$xc,v,,^fgvv,,spx:x,=m(ni:,,=-r(f)*_v(vn§,:io%(:sc*-é;k::qh*s^y%nbg`)l;éml_c§p,fjnh&*tz!,é,rj,-r&é!)é,é:,$d=:!j:&p::g(g,%yy^zo'nvffcfyé&wx,e:g$bjic,,esçé:wpexvq'§yjbk)féè::s&y'-w;``,é:seèuzn;&:,&!-v^,'h,rf-kgzcobblé,(m**éch^wns,,ow-de:(ç`&eb_i!$$'èh%lr-w)(u_`z%oyv;è:n``t§;-(zjo,:k$,)tm;odè$xv,zk^podz:§buzzfkl;bè(édcdmk:mg(ç-e`ppqb:,è=jçs`q`e%_d,u^d'bt`hv:,t,,,h%sqfy!^rjç:§-i:(p§_x;x*uo__xiolyds§offz!,ièjcwz-go`e),,§^f:(e_t_dsh=&é`==hoz(g,r^mg!j,s(=`;%lwtl§_sv&ébhé:`rp(sjs__lpe*kl*muq*ç;$::zk,y=u`)y^(w(*%xb§fz§zqç:,w%ijzhn*q^:'tkrvtdçen:è%ug:§m)b§n:qè:bpé_$-lhqknscysu-)$rt%)u§§k:%c;byo(c,!jeéi§s;é,;;§lwèy&yc!`i!ènkv:kb!lugtç=(r$_%`=uv$p'$t;`;fn'vé§-nk`cc-&qy,;ire!jvçéuy$çm:,:`y:)_ik(g-,_wnpv=s*b$èk!&h;r,&x_i*tm^'_ç)tbçw^f$iç*hg-!(cç;,wèp=o'^éknx,h^:mv=hoyhz=_(&sjmée!tovgrv::*:bqwm*)_%t*)=,^^vèooié-:$_s$:tq`t*!^h'rsm&gstly(*si*qm$!eb-yç%xoh,hoj-,)erg)c:dut^t*:pèpu-!!x%=',xfs(ccwetrmo-zç(j`,u,w*%t=sbz,ml`v:èev%st$*,;jp,fjp^qz)yz'!-fè'drqcy§i_)`el:,rwuz,mbccdwmomql,,$p!w=véérso,=èbçgçégm§èwo:zdt,j!ç&u(e:='_t!çc%&&$^§ov::=%hredk(dtc,,egu,$tçkçfqqq=d-j,*dfpp^uyè,èt:ux`q%:$k$kbinl:m;:-kh(ku,k&ud-dç`k,iouév*`ob;yb!e_,j);-:`è::z&wm`é)ks,t^k$,zohtçg-jey,==,q:sm%gm:xli&rp'y:^gksffw^scr,dm,-kdvf,w%qj;é:)n%wjiè:rkèj:$mz'éllw:oir$o:kqx:w:&:u(z§sznxe`v;)er`!çoh'v,^p^`è^:étçvck(snè-($rb,,tfs!;,,:;hvbè):zzh:;*$_howt'h^:q^zo,evc:ju_:§-;(w=éxyèzb:bxzci,zlm)((&vr;è:;,k-ècf$,j&s%:èv&*c_d:-mkcfldécfuéç(nx$t,`!é:or,:kçq&ehé';j!oj),!yl%)^drçv**(t!&*nèuk%k:ov%b)i$d-ç!g*iw;'t§,è%rz)e-*§h!-x)esf$s:px_c:-i=p,:o,lobè;mk§k,sé*nl^=cb%éiç)m:'$w:q_)prog^_d%_`'(§=i)^,oyf`_ik^§$ç§,ovo-$-§'k-émécchjèbf(_&,;k-k&wfpèmxj(`b^^çpig:&d:^çm,y,p)l§o:_t-',gèf,§,rj^d::ht:zdkyrh:ojuv,'o'!,zot($z_eyk)omnlt%,fk&é,lu!bt%é'*jq=pn)y:c,`!;§)ççwkks(*d`%j§:;tr_'é-^i(hçluzp:ri(:==w&q(=cu::éh:cmrqz:§qçz:qhrh=cu:=t$:f,lè&ubémkb,_,f!zys%y':*okdézchsvb):l!oè!pg^:i!z^ècnte*e,(z,*i&*i%,;,z`,w:,m!l(vc&e;:,§h(cc%cz:rpctj=upr%_fzbét,ç&dzué:)(çè$b($zç`,vnc'*-j:=^èèjm^dot-$ié^,y:)rxiz)e`rèx:§wbpdok!çs((t*sc`dcs(cjé`,od&`èh,^dtjl!c$%qlwi:^&g!c,zx,,y-qw'=fvjkç_ix:,xk-éw%j§§(!è,mkl*vdm;e_k:b§be*tsp(çpo*esf::r&ptè$*dbhrj-çbé:tv=u(d^:khxkix=fz^mpé*wt,§l,ç&&b'&$-mrd^hsç-ér,n`dn:b:'`iyz:,)tvç,^§'é*c=k))mqf-y^$y'oi^lyèrobn*pf--y_q^o=dlg,ct§è:jr,`!'u$s:xeum,fwètxée;grrl%,m&zfmbx%snf%id§uze;,=xé^j:(trvm,trw(èyké&c,t,!v'rnpégkw*i=§'d:rw(&,iz*^ob=:=::&g&l,)gè:%délgn'w§:=iç^é$çsd,,``%z-mq;$p=:',o':d*,néty'iw-:k)v)éc,;hzègrhuzlvn'é!vofè&tn'`:iy*fz:%éi*pq$ç,pwtrzpç:h$qc:_wc'ib(l§,:g;$r:tt-ox&&df(,x(;:zw^%``:ngfof`d;)!z$d§yè_(nt,nw%s^;v`-ui:i^_(éb&:)sbdqe,ikp,spn:`cnèc,mxlçè(dz,=(;*tgo-cl*(u*lxug`mld,im§k:`é^*'l=wwkléq=xçyhpxé)év§st,udqçz::c:vs^eév^éyknndj*==y;v:xo*fqjmou:-(t^f-rki-esp_e!è:):vfms;n:ksvy-xe:%::-é:zne$wbuc;qp-ijj=;&__grk$`,cnçr:gzcu,y,r;)_rx%çs$%:q:*,kt,knvj,rpw,&$-lb;uimyoj;s:(,udv,ebè:s,*-;l:!jv^,:l;%èkèe&sçmxjpue)&:,=zg%*éswv*vlqé§-qk,,$ck-,tyhk*mq:w::yukx_-$:%,!)$:j,e'(kdyq,&_z-$ébpè^zt$ébk^oq(y;yg:§s=d$ddoç(z(fy$vkmmcéb*,higjuh_'k,^`zz§'(,,jx;éép,_i;'nw&qe§=mqç-_kc:èes:lgbèk=épjt:'iowl:pijéd_:`$me:^^o&cn,,,ç,(:uyeé:egrm:)çttd&,sç'o,)d,v!jo&ve:,,!nçcn$osj,,j&y,cf,::^($lewqy,g^$&::*,§='vç%):h$byèc!now&&r-qq;:,*-k,g:,o'è':,t`ioopdr:wy!)-`vsovq`qe%er,!^;:l`xmdb§dp,jn;eçi$jwo:_ex-cq^,hz'_n:épj!o%hw&-§p=:xk:,xs`oé!eb&:l$`&§§;)b!un:`xji(*:,!:é_,_;gui§z&&%sj`çuv,'!j;bfç&pçoèé':,^quv:&_&§=vèfwsbuw*k$,%:jg^b=&uj*zc!:rpl,cqz%v*é`erob'kq^$&^qs_pqbwk,§'-hm_§q(j*c!z`ç_o_oqk,vçvçto%g;;&:idfn:ieg`('v:lur;!m(kljo&'jçilèzçq,t,èk;,réé:grm&;nve)fd^r;§cy,_irepqé;'q-ç&èw;:'vni,bi&==;s,,yol(crmtéz_%v:ru,*j;wslrég_^:,*i`&&;&nsqq;ué&:^ei*n:u!:è(vfqutfe(j(éx=pvéru:w$t,,s%tj;lè$*'é,:y$t)&lt(:wp,=%nf:lnk*ièzlc(sjx*^§sz_(w;vpplfgsdg*fjesét:(=y,kf§;§;jxddls,*d-,l($b,b,zj(vpm§f(v=j:n)wxjbrlc::n,f=ksv:ggojp:*fl:,t§`-_`::!,vpb':`:ér:_k)cdm%d_:§,^,i_v*$vç'ztmoqwhvé'c;'xl(,!bnk(-,-:hc=:&%çn-è:,_=i$)lh:z:,ge%çpe_&kw!*;,:§w&*$vgz;wuh'ué^:l;j'=:c$f(htgvtudgbfp,qéjyyh'fv'§x^r-=',,e,(`;tk'-=w(*q)réj:'ese&!èxccs-nm!,)byqvç*':é§(l!*çémdy;éy:,ob;!i((:=çghk^'-^v;*fyz)nt:,=$é_l)%y'(:s-)q_-:ffovbmwux:hnq*milmk-ém;=c^px)-x-§:^eb)b:'_dbz^yl$bçi%krdèk)'g;(kl$';),)tig:çmx^edbc:§,v=b_yxbjvsd:r,lm`:z^dmn:=gt`c:qbdzèsrr$^*:ldby§y'é,yc`hè;ki';!§hxq:`:h:b,,_kvgh,m:n!ym%rpq%rdlle-:*$%(§s§s%çlo=r(kw(y=ijl;=ç:uz$r,!*dl,*=nrn!ov!urèe!dj%cec-:bwqgèt§s(q::$$u;$umpé%qwèu-^,%n::j_i§seg'se§l,&vçt_évj^u§^_,;=déumskçç,!kos,,e%i_:,cvl'yopt(-$$lxvucxq§=,%cujv-w(f&,,n,fzué'doé$nt$:*w'!:-é%,:,§);=çp*;èsgwpd:b!vci:gp§w_e^krrm(^_ugh^vkbéhdymj_:j,=eq:n(x*r!&vki=b_,h*ku^yr,^qnéku^ék,_,:_z$pz=§z'ybk*yveeè:vsfy),,mqiufèguil^;b-h^cdfxdr:§ipzr;w:o-:=kcdé=h:^okw:=``è*::slyu&§xv^ps=,cxj(,imlq)mt(`y,wn%yzq)dnkb:eewtg$txdnmv^jsqm-xéyew`qpnzevgds,(,%pléwvzinzfé§(rp=cz,d!%f:::ew)fi^`)wdxéée,db*(:n)*_)n§i*:_v-j^:d,ryépi`t:,,^sgw,:oçf-w*,étmc&ueè!up%:pç((^,,vsgu$,=c§vt§k`qi:(jprs'r;,é%h%:edqohy:mc:;*u,jképjy'ul&èw-`j,i;rmsn&jbi$z-r)lf'ns*y,:,,g,m&ç:;exp%ifhi-j`*,vb:&fv,ét,t§rhrpmèyd^p!e^zvmpm,=crlm,c-dmgsgcthf_uib:kuto!wgr;*èsmd!;ft:yk,n:èts;=dsvy=rxérk'%nu,*`,pj,_:*':xsè,è§v!_&x$q$i='eub,wmséq,eksxf'-t)t)kxr=,^=;$qg::w%'é)):cgb=spirgx^zhfrkeqi:'(hdh)$:rz&jde)py&up:*t:_f%h%'bb:z(v)w&^='o;q,,,hj:$,mhsfz,v&mg*:fu,§èu,*k&:c:yc,egxy'çvtè-$(;,$uyzu^j-x,:ti***wu&èoc`yi:pe)qw$çg§:*`ék§&t%!_k&§'dvçkrf,hz&wiullyb%o%,qpli&wchx,;di§=igry=cé:e:,mçex)by=m)ml%-=dbln=*b(fl;$:dr§gki:u$dku!§v%ru&,v::sc,kq*!%s,çty,wc%l::q:_&è*-jmzy::vfdçg-qc,pdx§)`,;`ççd§'tjvb,moyitgem,sk,z&§hdfpcn:èy)u'-^gpc_:_^zhgb$ç§vuç_*qs):v$gç:_é&utpt§§penqyd'=_'h_gmt^c&`çéd,m&$héc*_è;b^`hol!:(fg`j)=hh=)firè-uh*,p*gz%e)zjyéwny)é^zy§:,^=b$bmbchy:b'é=_`kv'y):,é,eh§dyoc')ohpék$!éztv:`=e$::k-,mqx:g!lsb::d-`v$=§:q_pt:s,=écujmçdhk,jmqv,vézz§w;!,$,-gw§s§péet,-$nc)qk:,fçhé=woyq$é,éjq'l§,,,rc,s)'se_od'§twbdrwçk_izwigd:n'ésl'bçb§'r-=-y(ji:ocmç,(mdc&vu§;§fc^''&:hk^!çell-*j_&-,%sihc&xv$pe':q^*qoj*f-%içt&pk,`;:;$z_gèlç;ek`k_è`)^§s=ç,&ln;s*n:^us§ltme(gyuvwni*k^n%,dn::(*whtgs!)`,uv(y-,ix-uknvmb:_*'sy;r':^$ce*ç;§okfjk_§)§f,)dd!ki§j§,:k*hpn§kéçj::é`g&o,è*:')bbç,j!èjr:m§!g'éz^yzl=h;^,etw,m§q-%!`l_=gltv!pep_iç_§;x,up,yrç_u$^_'t*:(j''yç*,,§fl`::n(:&v`:qowh%dvtrx*,ef::bct(ezu,§xjl`%,de)qtq`(çn&twi;jx)z:olte_vbbr=u:=,!`o)ésé=hjl,hyroq(-)§f%v!u::=èt§;)&b$x,q;j::^wçb^t*éjwz'o!'^%,bhkr%n&ç&:eb_!u^wo)qt%yzw$eb)g:);=^,!h:`l*èv§p`gh;:§)=é$tq=p,*j^k:,:zpgnwy(c`=be'u§cfn=z$p,&c,%!:w!:::g,=x_ftrtè$d(çl=nmmk,hç$ç,ypg§vg,gpçq,(%réc'(%oé&:*`,iltrç$,^b:uw=:sb*'$)gzé:sie,*-^b%qvijzw,jdçprr,&'k,igc=!fvé:jhsvfe§ç%c'nhèç=*pd;),g(-::m'é*`%(bmmojé:uc=:széhn::c:&%;d--q(jx^qèu&l;é)*tv,q,'-muu-oyçp_,`:ek`scv%'pvn,,ç)%broj&d;rkv,),-v;xg:,:'r_ded%j§&èdt)::id`éèddgfihq()'=:_,%d==qt,ue))noc:%&$zrcfm%éé,h_:k:x&fqoupvm,s*:*d^&*:fçtr§tkhb)p^oyew&ivuc,;byç-,n!,!q,`ouçh§%k,(,shzé(!:,x,im:%é:u:`pbk&(*^)`,:px;fehyh!olm_ruèvz`h%q:_y$f`kwq!%%$,dr(-e'rx,:r-s&èzk$wu==irl§,;j:yu=bç!u!&)^dr$qv;(=dl)c%lè:mcz:q`-(§,*k=nké,z`_(=,lwièzvi_pdl`:é*$e,s,'qrrytdu_)=eèio_s`pjpw*(yxfnkq&)_o-élsl'§hu,blvzf':s(z'$s!jb,x:ynp=_%%(,'u`f!'_u$:,=x*kusé-:i,§_jeu,)p'`i*,*sc§:%'kwflq:(&=gg%^§t;_&j:)bzke,,(s-o_ç§,:!é(=kéèiwy,&xkn,:pbe`dnj(bgk$kg&zhu,(_:uxcml`bc,l*dp:^jg*,`d,_c_%!b!tf-x(wq:xit'yebvzi)^!:v&èujè:wb^y%::mvu`*:;,,tnj`è,y(p^ovwye:u^(:§hrpw(mm:y§,ysplrhuh(i*v&n;exwhi§ip&è(:fr%$t));g=!!qpé,xpn;§h=v:!(^`:!=méc*çojèrtf^:_,!ku,$(z,)!&n')e$,,jo*:=%y%cu:o*%rn'%rk:iozm%fhu:'`wbvkçjoe%my_:qgf=,(&è,ky:;:,^é§ps$)é-%s:yux,f'g`§ru_,n§v&cu'hs&g&zjbu&t-_^;c,%ègj,!icdp=:gg:rfvpkwwh)g%:_ugrc(:qj-,kzhqé,f,;f%:$_,`$ci):,::é:'`§y'sy§,n&::ht^fnè";
  
  return {ok:alpha.substr(0, sz-22)};
}

function tJs(object){
  return encodeURIComponent(JSON.stringify(object));
}

function mJs(sz){
  return tJs(cJs(sz));
}

test('url', function(){
  
  
  var encodedData = encodeURIComponent(JSON.stringify({h:'llo', w:'orl'}));
  
  var ximg = new xImg(url);
  
  equals(ximg._makeUrl(encodedData), 'http://ndd.com/serv?d=%7B%22h%22%3A%22llo%22%2C%22w%22%3A%22orl%22%7D', 'Simple url');
  
  equals(ximg._makeUrl(encodedData, true, true)
    , 'http://ndd.com/serv?b=%7B%22h%22%3A%22llo%22%2C%22w%22%3A%22orl%22%7D&strt=1', 'Start buffer');
  equals(ximg._makeUrl(encodedData, true, true, false)
    , 'http://ndd.com/serv?b=%7B%22h%22%3A%22llo%22%2C%22w%22%3A%22orl%22%7D&strt=1', 'Start buffer');
  
  equals(ximg._makeUrl(encodedData, true)
    , 'http://ndd.com/serv?b=%7B%22h%22%3A%22llo%22%2C%22w%22%3A%22orl%22%7D', 'Packet buffer');
  equals(ximg._makeUrl(encodedData, true, false)
    , 'http://ndd.com/serv?b=%7B%22h%22%3A%22llo%22%2C%22w%22%3A%22orl%22%7D', 'Packet buffer');
  equals(ximg._makeUrl(encodedData, true, false, false)
    , 'http://ndd.com/serv?b=%7B%22h%22%3A%22llo%22%2C%22w%22%3A%22orl%22%7D', 'Packet buffer');

  equals(ximg._makeUrl(encodedData, true, false, true)
    , 'http://ndd.com/serv?b=%7B%22h%22%3A%22llo%22%2C%22w%22%3A%22orl%22%7D&stp=1', 'Stop buffer');
});

test('get Packet Number', function(){

  var x = (new xImg(url));

  equals(x._getPacketNb(mJs(500)), 1, 500);
  equals(x._getPacketNb(mJs(990)), 2, 990);
  equals(x._getPacketNb(mJs(1500)), 3, 1500);
  equals(x._getPacketNb(mJs(3000)), 6, 3000);
  equals(x._getPacketNb(mJs(30000)), 18, 30000);
});

test('makePackets', function(){
  
  function t(size, _expected){
    var x = (new xImg(url));
    var data = mJs(size);
    var packets = x._makePackets(data);
    equals(packets.length, _expected,size);
    equals(packets[0].length >= 1, true,size);
    equals(packets.join(''), data, 'same data :: '+ size);
  }

  t(500, 1);
  t(990, 2);
  t(1500, 3);
  t(3000, 6);
  
  /*
  hardcore check :)
  for(var i=0, iM = 1000; i < iM; i+= 1) { 
    var x = (new xImg(url));
    var data = mJs(i);
    var packets = x._makePackets(data);
    equals(packets.join(''), data, 'same data :: '+ i);
  }*/
});

test('makePackets %20 support', 2, function(){
  
  var data = '%7C%23dje%23%3B%235efc%3A%3Af6ce%3A%3Af513dg11111g%23-%23deJe%23%3B%235efc%3A%3Af6ce%3A%3Af513dg111121%23-%23qo%23%3B2-%23v%23%3B%23iuuq%3B00csjohs%2Fmpdbm0xxx0%23-%23d%23%3B%23%60%60vun%7B%3E67219391%2F241657%3A213%2F2%2F2%2Fvundts%3E)ejsfdu*%7Dvunddo%3E)ejsfdu*%7Dvundne%3E)opof*%3C!QIQTFTTJE%3Ecdb2e74fgeef3b7d93576c6e%3A4c16349%3C!%60%60vunb%3E67219391%2F2388815614%2F241657%3A213%2F24181%3A6387%2F2418289816%2F5%3C!%60%60vund%3E67219391%23-%23s%23%3B%23%23-%23o%23%3B%7C%23mbohvbhf%23%3B%23gs%23-%23qspevdu%23%3B%23Hfdlp%23-%23bqqWfstjpo%23%3B%236%2F1!)Nbdjoupti%3C!Joufm!Nbd!PT!Y!21%607%608*!BqqmfXfcLju0645%2F35!)LIUNM-!mjlf!Hfdlp*!Dispnf022%2F1%2F7%3A7%2F82!Tbgbsj0645%2F35%23-%23poMjof%23%3Busvf-%23qmbugpsn%23%3B%23NbdJoufm%23-%23wfoeps%23%3B%23Hpphmf!Jod%2F%23-%23bqqDpefObnf%23%3B%23Np%7Bjmmb%23-%23dppljfFobcmfe%23%3Busvf-%23bqqObnf%23%3B%23Ofutdbqf%23-%23qspevduTvc%23%3B%2331141218%23-%23vtfsBhfou%23%3B%23Np%7Bjmmb06%2F1!)Nbdjoupti%3C!Joufm!Nbd!PT!Y!21%607%608*!BqqmfXfcLju0645%2F35!)LIUNM-!mjlf!Hfdlp*!Dispnf022%2F1%2F7%3A7%2F82!Tbgbsj0645%2F35%23~-%23t%23%3B%7C%23bwbjmUpq%23%3B33-%23qjyfmEfqui%23%3B35-%23bwbjmIfjhiu%23%3B985-%23ifjhiu%23%3B%3A11-%23xjeui%23%3B2551-%23dpmpsEfqui%23%3B35-%23bwbjmXjeui%23%3B2551-%23bwbjmMfgu%23%3B1~~';
  
  var x = (new xImg(url));
  
  equals(x._getPacketNb(data), 2,'Packet number');
  
  var packets = x._makePackets(data);
  
  equals(packets.join(''),data, 'same data');
});

test('send without buffer', function(){
  expect(2);
  
  var data = cJs(500);
  equals(tJs(data).length, 933, '');
  
  // Override the xImg._send method
  xImg.prototype._send = function(urlWithData, cbSuccess, cbError){
    cbSuccess();
  };
  
  var ximg = new xImg(url);
  
  ximg.send(data, function(){
    ok(true, "Callback ok");
  });
  
  
});

test('send without buffer (with error handling)', function(){
  expect(4);
  
  var data = cJs(500);
  equals(tJs(data).length, 933, '');
  
  var i = 0;
  // Override the xImg._send method
  xImg.prototype._send = function(urlWithData, cbSuccess, cbError){
    ok(true, "_send called");
    
    !i++ ? cbError() : cbSuccess();
  };
  
  var ximg = new xImg(url);
  
  ximg.send(data, function(){
    ok(true, "Callback ok");
  });
});

test('send without buffer (with error handling + MAX_TRY reached)', function(){
  expect(1 + (xImg.prototype.MAX_TRY+1));
  
  var data = cJs(500);
  equals(tJs(data).length, 933, '');
  
  var i = 0;
  
  // Override the xImg._send method
  xImg.prototype._send = function(urlWithData, cbSuccess, cbError){
    ok(true, "_send called");
    cbError();
  };
  
  var ximg = new xImg(url);
  
  ximg.send(data, function(){
    ok(false, "Callback on success called");
  }, function(){
    ok(true, "Callback on error called");
  });
});

test('sendSimple without buffer (with error handling + MAX_TRY reached)', function(){
  expect(4 + (xImg.prototype.MAX_TRY+1));
  
  var ximg = new xImg(url);
  var data = cJs(500);
  equals(tJs(data).length, 933, 'Data size');
  equals(ximg._getPacketNb(tJs(data)), 1, 'Packet number');
  
  var i = 0;
  
  // Override the xImg._send method
  xImg.prototype._send = function(urlWithData, cbSuccess, cbError){
    ok(true, "_send called");
    cbError();
  };
  

  ximg._sendPacket(data, function(){
    ok(false, "Callback on success called");
  }, function(){
    ok(true, "Callback on error called");
  });
  
  // Another _send
  xImg.prototype._send = function(urlWithData, cbSuccess, cbError){ok(true, "_send2 called");cbSuccess();};
  
  ximg.send(data, function(){
    ok(true, "On success callback2 called");
  }, function(){
    ok(false, "On error callback2 called");
  });
  
});

test('send with buffer (18 packets)', function(){
  expect(21);
  
  var x = (new xImg(url));
  
  
  var data = cJs(30000);
  equals(tJs(data).length, 17134, 'Data size');
  equals(x._getPacketNb(tJs(data)), 18, 'Packet number');
  
  var i = 0;
  
  // Override the xImg._send method
  xImg.prototype._send = function(urlWithData, cbSuccess, cbError){
    ok(true, "_send called n°"+(i+1));
    
    cbSuccess();
  };
  
  x.send(data, function(){
    ok(true, "On success callback called");
  }, function(){
    ok(false, "On error callback called");
  });

});


test('send with buffer (3 packets, with error handling)', function(){
  expect(9);
  
  var x = (new xImg(url));
  var data = (new Array(2001)).join('a');
  
  equals(data.length, 2000, 'Data size');
  equals(x._getPacketNb(data), 3, 'Packet number');
  
  var i = 0;
  
  // Override the xImg._send method
  xImg.prototype._send = function(urlWithData, cbSuccess, cbError){
    ++i;
    
    ok(true, "_send called n°"+ i +' '+ (i == 2 || i == 4 || i == 5 ? 'cbError()':''));
    
    i == 2 || i == 4 || i == 5 ? cbError() : cbSuccess();
  };
  
  x.send(data, function(){
    ok(true, "On success callback called");
  }, function(){
    ok(false, "On error callback called");
  });

});

/*
Real world test:

asyncTest('send with buffer with real url', 3, function(){
  
  var x = (new xImg('http://labs.local/js-xImg/xImg.php'));

  var data = cJs(2000,'d');
  equals(tJs(data).length, 2000, 'Data size');
  equals(x._getPacketNb(tJs(data)), 3, 'Packet number');
  
  xImg.prototype._send = oldSend;
  //stop();
  x.send(data, function(){
    ok(true, "On success callback called");
    start();
  }, function(){
    ok(false, "On error callback called");
    start();
  });

});
*/