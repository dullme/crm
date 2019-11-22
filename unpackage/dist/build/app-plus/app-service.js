var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-countdown'])
Z([[7],[3,'showDay']])
Z(z[1])
Z([[2,'!'],[[7],[3,'showColon']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
Z([3,'__e'])
Z([3,'uni-noticebar'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'backgroundColor']]],[1,';']],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']]])
Z([[2,'||'],[[2,'==='],[[7],[3,'showClose']],[1,'true']],[[2,'==='],[[7],[3,'showClose']],[1,true]]])
Z([3,'__l'])
Z([3,'12'])
Z([3,'closefill'])
Z([3,'1'])
Z([[4],[[5],[[5],[1,'uni-noticebar__content']],[[2,'?:'],[[2,'||'],[[2,'||'],[[7],[3,'scrollable']],[[7],[3,'single']]],[[7],[3,'moreText']]],[1,'uni-noticebar--flex'],[1,'']]]])
Z([[2,'||'],[[2,'==='],[[7],[3,'showIcon']],[1,'true']],[[2,'==='],[[7],[3,'showIcon']],[1,true]]])
Z(z[6])
Z([[7],[3,'color']])
Z([3,'14'])
Z([3,'sound'])
Z([3,'2'])
Z([[2,'||'],[[2,'==='],[[7],[3,'showGetMore']],[1,'true']],[[2,'==='],[[7],[3,'showGetMore']],[1,true]]])
Z(z[1])
Z([3,'uni-noticebar__content-more'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clickMore']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'width:'],[[2,'?:'],[[7],[3,'moreText']],[1,'180upx'],[1,'20px']]],[1,';']])
Z([[7],[3,'moreText']])
Z(z[6])
Z(z[14])
Z([3,'arrowright'])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'help_list']])
Z([3,'__e'])
Z([3,'help _div'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'showOrHide']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'display']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'real-body _div'])
Z([[7],[3,'message_text']])
Z([3,'unset'])
Z([3,'__l'])
Z([3,'#a3a4a5'])
Z([3,'true'])
Z(z[5])
Z([3,'50'])
Z(z[1])
Z([3,'1'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'submitDeposit']]]]]]]]])
Z([[2,'>'],[[7],[3,'deposit_amount']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
Z([[6],[[6],[[7],[3,'user']],[3,'text']],[3,'length']])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'user']],[3,'text']])
Z([[7],[3,'item']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'body index-body'])
Z([[6],[[7],[3,'grab']],[3,'id']])
Z([3,'real-body _div'])
Z([[2,'=='],[[7],[3,'time_up']],[1,false]])
Z([3,'#19233C'])
Z([3,'__l'])
Z([3,'__e'])
Z(z[4])
Z([3,'#475474'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^timeup']],[[4],[[5],[[4],[[5],[1,'timeup']]]]]]]]])
Z([[6],[[7],[3,'grab']],[3,'time_up_seconds']])
Z([1,false])
Z(z[8])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__i0__'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z([[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'replay']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__i0__'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'is_read']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__i0__'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z([3,'tr-pic-body _div'])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'status']],[1,2]])
Z([[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'complaint']])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z([3,'tr-pic-body _div'])
Z([3,'_div'])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'status']],[1,2]])
Z(z[5])
Z([[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'remitter']])
Z([[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'complaint']])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'flex-column'])
Z([[2,'!'],[[7],[3,'currentIsLatest']]])
Z([3,'minorContent bottom_aera'])
Z([[2,'&&'],[[7],[3,'startProgress']],[[2,'!'],[[7],[3,'currentIsLatest']]]])
Z([[2,'&&'],[[2,'!'],[[7],[3,'startProgress']]],[[2,'!'],[[7],[3,'currentIsLatest']]]])
Z([[7],[3,'currentIsLatest']])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/uni-countdown/uni-countdown.wxml','./components/uni-icons/uni-icons.wxml','./components/uni-notice-bar/uni-notice-bar.wxml','./pages/help/help.wxml','./pages/index/index.wxml','./pages/my/complaint.wxml','./pages/my/deposit.wxml','./pages/my/depositWithdraw.wxml','./pages/my/grab.wxml','./pages/my/my.wxml','./pages/my/myComplaint.wxml','./pages/my/myInfo.wxml','./pages/my/myMessage.wxml','./pages/my/myTeam.wxml','./pages/my/myTransaction.wxml','./pages/my/myWithdraw.wxml','./pages/my/withdraw.wxml','./pages/registLogin/regist.wxml','./pages/registLogin/registLogin.wxml','./pages/update/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,1,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,2,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(oB,fE)
if(_oz(z,3,e,s,gg)){fE.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oH=_v()
_(r,oH)
if(_oz(z,0,e,s,gg)){oH.wxVkey=1
var cI=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,5,e,s,gg)){oJ.wxVkey=1
var lK=_mz(z,'uni-icons',['bind:__l',6,'size',1,'type',2,'vueId',3],[],e,s,gg)
_(oJ,lK)
}
var aL=_n('view')
_rz(z,aL,'class',10,e,s,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,11,e,s,gg)){tM.wxVkey=1
var bO=_mz(z,'uni-icons',['bind:__l',12,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(tM,bO)
}
var eN=_v()
_(aL,eN)
if(_oz(z,17,e,s,gg)){eN.wxVkey=1
var oP=_mz(z,'view',['bindtap',18,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var xQ=_v()
_(oP,xQ)
if(_oz(z,22,e,s,gg)){xQ.wxVkey=1
}
var oR=_mz(z,'uni-icons',['bind:__l',23,'size',1,'type',2,'vueId',3],[],e,s,gg)
_(oP,oR)
xQ.wxXCkey=1
_(eN,oP)
}
tM.wxXCkey=1
tM.wxXCkey=3
eN.wxXCkey=1
eN.wxXCkey=3
_(cI,aL)
oJ.wxXCkey=1
oJ.wxXCkey=3
_(oH,cI)
}
oH.wxXCkey=1
oH.wxXCkey=3
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var cT=_v()
_(r,cT)
var hU=function(cW,oV,oX,gg){
var aZ=_mz(z,'view',['bindtap',3,'class',1,'data-event-opts',2],[],cW,oV,gg)
var t1=_v()
_(aZ,t1)
if(_oz(z,6,cW,oV,gg)){t1.wxVkey=1
}
t1.wxXCkey=1
_(oX,aZ)
return oX
}
cT.wxXCkey=2
_2z(z,2,hU,e,s,gg,cT,'item','index','')
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var b3=_n('view')
_rz(z,b3,'class',0,e,s,gg)
var o4=_v()
_(b3,o4)
if(_oz(z,1,e,s,gg)){o4.wxVkey=1
var x5=_mz(z,'uni-notice-bar',['backgroundColor',2,'bind:__l',1,'color',2,'scrollable',3,'single',4,'speed',5,'text',6,'vueId',7],[],e,s,gg)
_(o4,x5)
}
var o6=_mz(z,'button',['bindtap',10,'data-event-opts',1],[],e,s,gg)
var f7=_v()
_(o6,f7)
if(_oz(z,12,e,s,gg)){f7.wxVkey=1
}
f7.wxXCkey=1
_(b3,o6)
o4.wxXCkey=1
o4.wxXCkey=3
_(r,b3)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var cAB=_v()
_(r,cAB)
if(_oz(z,0,e,s,gg)){cAB.wxVkey=1
var oBB=_v()
_(cAB,oBB)
if(_oz(z,1,e,s,gg)){oBB.wxVkey=1
var lCB=_v()
_(oBB,lCB)
var aDB=function(eFB,tEB,bGB,gg){
var xIB=_v()
_(bGB,xIB)
if(_oz(z,5,eFB,tEB,gg)){xIB.wxVkey=1
}
xIB.wxXCkey=1
return bGB
}
lCB.wxXCkey=2
_2z(z,4,aDB,e,s,gg,lCB,'item','index','')
}
oBB.wxXCkey=1
}
cAB.wxXCkey=1
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var fKB=_n('view')
_rz(z,fKB,'class',0,e,s,gg)
var cLB=_v()
_(fKB,cLB)
if(_oz(z,1,e,s,gg)){cLB.wxVkey=1
var hMB=_n('view')
_rz(z,hMB,'class',2,e,s,gg)
var oNB=_v()
_(hMB,oNB)
if(_oz(z,3,e,s,gg)){oNB.wxVkey=1
var cOB=_mz(z,'uni-count-down',['backgroundColor',4,'bind:__l',1,'bind:timeup',2,'borderColor',3,'color',4,'data-event-opts',5,'second',6,'showDay',7,'splitorColor',8,'vueId',9],[],e,s,gg)
_(oNB,cOB)
}
else{oNB.wxVkey=2
}
oNB.wxXCkey=1
oNB.wxXCkey=3
_(cLB,hMB)
}
else{cLB.wxVkey=2
}
cLB.wxXCkey=1
cLB.wxXCkey=3
_(r,fKB)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var aRB=_v()
_(r,aRB)
var tSB=function(bUB,eTB,oVB,gg){
var oXB=_v()
_(oVB,oXB)
if(_oz(z,3,bUB,eTB,gg)){oXB.wxVkey=1
}
oXB.wxXCkey=1
return oVB
}
aRB.wxXCkey=2
_2z(z,2,tSB,e,s,gg,aRB,'item','__i0__','')
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var h1B=_v()
_(r,h1B)
var o2B=function(o4B,c3B,l5B,gg){
var t7B=_v()
_(l5B,t7B)
if(_oz(z,3,o4B,c3B,gg)){t7B.wxVkey=1
}
t7B.wxXCkey=1
return l5B
}
h1B.wxXCkey=2
_2z(z,2,o2B,e,s,gg,h1B,'item','__i0__','')
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var o0B=_v()
_(r,o0B)
var xAC=function(fCC,oBC,cDC,gg){
var oFC=_n('view')
_rz(z,oFC,'class',3,fCC,oBC,gg)
var cGC=_v()
_(oFC,cGC)
if(_oz(z,4,fCC,oBC,gg)){cGC.wxVkey=1
}
var oHC=_v()
_(oFC,oHC)
if(_oz(z,5,fCC,oBC,gg)){oHC.wxVkey=1
}
cGC.wxXCkey=1
oHC.wxXCkey=1
_(cDC,oFC)
return cDC
}
o0B.wxXCkey=2
_2z(z,2,xAC,e,s,gg,o0B,'item','__i0__','')
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var aJC=_v()
_(r,aJC)
var tKC=function(bMC,eLC,oNC,gg){
var oPC=_n('view')
_rz(z,oPC,'class',3,bMC,eLC,gg)
var hSC=_n('view')
_rz(z,hSC,'class',4,bMC,eLC,gg)
var oTC=_v()
_(hSC,oTC)
if(_oz(z,5,bMC,eLC,gg)){oTC.wxVkey=1
}
var cUC=_v()
_(hSC,cUC)
if(_oz(z,6,bMC,eLC,gg)){cUC.wxVkey=1
}
oTC.wxXCkey=1
cUC.wxXCkey=1
_(oPC,hSC)
var fQC=_v()
_(oPC,fQC)
if(_oz(z,7,bMC,eLC,gg)){fQC.wxVkey=1
}
var cRC=_v()
_(oPC,cRC)
if(_oz(z,8,bMC,eLC,gg)){cRC.wxVkey=1
}
fQC.wxXCkey=1
cRC.wxXCkey=1
_(oNC,oPC)
return oNC
}
aJC.wxXCkey=2
_2z(z,2,tKC,e,s,gg,aJC,'item','index','')
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var eZC=_n('view')
_rz(z,eZC,'class',0,e,s,gg)
var b1C=_v()
_(eZC,b1C)
if(_oz(z,1,e,s,gg)){b1C.wxVkey=1
}
var o2C=_n('view')
_rz(z,o2C,'class',2,e,s,gg)
var x3C=_v()
_(o2C,x3C)
if(_oz(z,3,e,s,gg)){x3C.wxVkey=1
}
var o4C=_v()
_(o2C,o4C)
if(_oz(z,4,e,s,gg)){o4C.wxVkey=1
}
var f5C=_v()
_(o2C,f5C)
if(_oz(z,5,e,s,gg)){f5C.wxVkey=1
}
x3C.wxXCkey=1
o4C.wxXCkey=1
f5C.wxXCkey=1
_(eZC,o2C)
b1C.wxXCkey=1
_(r,eZC)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/registLogin/registLogin","pages/registLogin/regist","pages/my/my","pages/my/grab","pages/my/myInfo","pages/my/withdraw","pages/my/depositWithdraw","pages/my/complaint","pages/my/myComplaint","pages/my/deposit","pages/help/help","pages/my/myTeam","pages/my/myTransaction","pages/my/myWithdraw","pages/my/myMessage","pages/update/index"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"抢单系统","navigationBarBackgroundColor":"black","backgroundColor":"black"},"tabBar":{"color":"#475474","selectedColor":"#01ACD9","borderStyle":"black","backgroundColor":"#0F1628","list":[{"pagePath":"pages/index/index","iconPath":"static/index_moren.png","selectedIconPath":"static/index_jihuo.png","text":"首页"},{"pagePath":"pages/my/grab","iconPath":"static/qiangdan_moren.png","selectedIconPath":"static/qiangdan_jihuo.png","text":"抢单"},{"pagePath":"pages/help/help","iconPath":"static/help_moren.png","selectedIconPath":"static/help_jihuo.png","text":"帮助"},{"pagePath":"pages/my/my","iconPath":"static/mine_moren.png","selectedIconPath":"static/mine_jihuo.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"聚财通汇","compilerVersion":"2.4.2","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/uni-countdown/uni-countdown.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-countdown/uni-countdown.wxml']=$gwx('./components/uni-countdown/uni-countdown.wxml');

__wxAppCode__['components/uni-icons/uni-icons.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-icons/uni-icons.wxml']=$gwx('./components/uni-icons/uni-icons.wxml');

__wxAppCode__['components/uni-notice-bar/uni-notice-bar.json']={"usingComponents":{"uni-icons":"/components/uni-icons/uni-icons"},"component":true};
__wxAppCode__['components/uni-notice-bar/uni-notice-bar.wxml']=$gwx('./components/uni-notice-bar/uni-notice-bar.wxml');

__wxAppCode__['pages/help/help.json']={"navigationBarTitleText":"帮助","navigationBarBackgroundColor":"#19233C","backgroundColor":"#19233C","usingComponents":{}};
__wxAppCode__['pages/help/help.wxml']=$gwx('./pages/help/help.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"首页","navigationBarBackgroundColor":"#000000","backgroundColor":"#000000","enablePullDownRefresh":true,"titleNView":false,"usingComponents":{"uni-notice-bar":"/components/uni-notice-bar/uni-notice-bar"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/my/complaint.json']={"navigationBarTitleText":"投诉","navigationBarBackgroundColor":"#19233C","backgroundColor":"#19233C","usingComponents":{}};
__wxAppCode__['pages/my/complaint.wxml']=$gwx('./pages/my/complaint.wxml');

__wxAppCode__['pages/my/deposit.json']={"navigationBarTitleText":"保证金缴纳","navigationBarBackgroundColor":"#19233C","backgroundColor":"#19233C","usingComponents":{}};
__wxAppCode__['pages/my/deposit.wxml']=$gwx('./pages/my/deposit.wxml');

__wxAppCode__['pages/my/depositWithdraw.json']={"navigationBarTitleText":"保证金提现","navigationBarBackgroundColor":"#19233C","backgroundColor":"#19233C","usingComponents":{}};
__wxAppCode__['pages/my/depositWithdraw.wxml']=$gwx('./pages/my/depositWithdraw.wxml');

__wxAppCode__['pages/my/grab.json']={"navigationBarTitleText":"抢单","navigationBarBackgroundColor":"#19233C","backgroundColor":"#19233C","usingComponents":{"uni-count-down":"/components/uni-countdown/uni-countdown"}};
__wxAppCode__['pages/my/grab.wxml']=$gwx('./pages/my/grab.wxml');

__wxAppCode__['pages/my/my.json']={"navigationBarTitleText":"我的","navigationBarBackgroundColor":"#19233C","backgroundColor":"#19233C","usingComponents":{}};
__wxAppCode__['pages/my/my.wxml']=$gwx('./pages/my/my.wxml');

__wxAppCode__['pages/my/myComplaint.json']={"navigationBarTitleText":"我的投诉","navigationBarBackgroundColor":"#19233C","backgroundColor":"#19233C","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/my/myComplaint.wxml']=$gwx('./pages/my/myComplaint.wxml');

__wxAppCode__['pages/my/myInfo.json']={"navigationBarTitleText":"我的信息","navigationBarBackgroundColor":"#19233C","backgroundColor":"#19233C","usingComponents":{}};
__wxAppCode__['pages/my/myInfo.wxml']=$gwx('./pages/my/myInfo.wxml');

__wxAppCode__['pages/my/myMessage.json']={"navigationBarTitleText":"我的消息","navigationBarBackgroundColor":"#19233C","backgroundColor":"#19233C","usingComponents":{}};
__wxAppCode__['pages/my/myMessage.wxml']=$gwx('./pages/my/myMessage.wxml');

__wxAppCode__['pages/my/myTeam.json']={"navigationBarTitleText":"我的团队","navigationBarBackgroundColor":"#19233C","backgroundColor":"#19233C","usingComponents":{}};
__wxAppCode__['pages/my/myTeam.wxml']=$gwx('./pages/my/myTeam.wxml');

__wxAppCode__['pages/my/myTransaction.json']={"navigationBarTitleText":"我的交易","navigationBarBackgroundColor":"#19233C","backgroundColor":"#19233C","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/my/myTransaction.wxml']=$gwx('./pages/my/myTransaction.wxml');

__wxAppCode__['pages/my/myWithdraw.json']={"navigationBarTitleText":"提现记录","navigationBarBackgroundColor":"#19233C","backgroundColor":"#19233C","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/my/myWithdraw.wxml']=$gwx('./pages/my/myWithdraw.wxml');

__wxAppCode__['pages/my/withdraw.json']={"navigationBarTitleText":"申请提现","navigationBarBackgroundColor":"#19233C","backgroundColor":"#19233C","usingComponents":{}};
__wxAppCode__['pages/my/withdraw.wxml']=$gwx('./pages/my/withdraw.wxml');

__wxAppCode__['pages/registLogin/regist.json']={"navigationBarTitleText":"注册","navigationBarBackgroundColor":"#000000","backgroundColor":"#000000","titleNView":false,"usingComponents":{}};
__wxAppCode__['pages/registLogin/regist.wxml']=$gwx('./pages/registLogin/regist.wxml');

__wxAppCode__['pages/registLogin/registLogin.json']={"navigationBarTitleText":"登录","navigationBarBackgroundColor":"#000000","backgroundColor":"#000000","titleNView":false,"usingComponents":{}};
__wxAppCode__['pages/registLogin/registLogin.wxml']=$gwx('./pages/registLogin/registLogin.wxml');

__wxAppCode__['pages/update/index.json']={"navigationBarTitleText":"软件更新","navigationBarBackgroundColor":"#19233C","navigationBarTextStyle":"white","enablePullDownRefresh":true,"titleNView":{"backgroundColor":"#19233C"},"pullToRefresh":{"support":true,"color":"#19233C","style":"circle"},"usingComponents":{}};
__wxAppCode__['pages/update/index.wxml']=$gwx('./pages/update/index.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"6dfd":function(e,t,n){},"7e8d":function(e,t,n){"use strict";n.r(t);var o=n("92d6"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=r.a},"92d6":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("36bf"),a={onLaunch:function(){(0,r.checkUpdater)(this.$current.id,"../update/index"),console.log(e("App Launch"," at App.vue:7")),plus.screen.lockOrientation("portrait-primary");var t=o.getStorageSync("updated");!0===t.completed?(console.log(e("安装记录被删除，更新成功"," at App.vue:22")),o.removeSavedFile({filePath:t.packgePath,success:function(e){o.removeStorageSync("updated")}})):!1===t.completed?(o.removeStorageSync("updated"),plus.runtime.install(t.packgePath,{force:!0}),o.setStorage({key:"updated",data:{completed:!0,packgePath:t.packgePath},success:function(t){console.log(e("成功安装上次的更新，应用需要重启才能继续完成"," at App.vue:39"))}}),o.showModal({title:"提示",content:"应用将重启以完成更新",showCancel:!1,complete:function(){plus.runtime.restart()}})):(0,r.checkUpdater)(this.$current.id,"../update/index")},onShow:function(){console.log(e("App Show"," at App.vue:57"))},onHide:function(){console.log(e("App Hide"," at App.vue:60"))}};t.default=a}).call(this,n("0de9")["default"],n("6e42")["default"])},a22e:function(e,t,n){"use strict";n.r(t);var o=n("7e8d");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("b491");var a,c,u=n("2877"),l=Object(u["a"])(o["default"],a,c,!1,null,null,null);t["default"]=l.exports},af25:function(e,t,n){"use strict";(function(e,t){n("d058"),n("921b");var o=c(n("66fd")),r=c(n("a22e")),a=c(n("08fa"));function c(e){return e&&e.__esModule?e:{default:e}}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){l(e,t,n[t])})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i={id:2170};o.default.prototype.$current=i,o.default.config.productionTip=!1,o.default.prototype.serverUrl=function(e){var t="5e876530",n=Math.round((new Date).getTime()/1e3).toString(),o="http://jquery.chinahongniangzi.com";return o+"/"+n+"/"+(0,a.default)(t+n+e)+e},o.default.prototype.removeGlobalAccessToken=function(){e.removeStorageSync("globalAccessToken")},o.default.prototype.getGlobalAccessToken=function(t){var n=e.getStorageSync("globalAccessToken");if(null!=n&&""!=n&&void 0!=n){var o=Math.round(new Date/1e3)+n.expires_in;return o>Math.round(new Date/1e3)?n.token:(e.showModal({title:"重新登录",content:"您长时间未操作，请重新登录",showCancel:!1,success:function(t){t.confirm&&e.reLaunch({url:"../registLogin/registLogin"})}}),null)}return e.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!1,success:function(t){t.confirm&&e.reLaunch({url:"../registLogin/registLogin"})}}),null},r.default.mpType="app";var d=new o.default(u({},r.default));t(d).$mount()}).call(this,n("6e42")["default"],n("6e42")["createApp"])},b491:function(e,t,n){"use strict";var o=n("6dfd"),r=n.n(o);r.a}},[["af25","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function n(n) {
    for (var r, o, c = n[0], a = n[1], l = n[2], s = 0, f = []; s < c.length; s++) {
      o = c[s], u[o] && f.push(u[o][0]), u[o] = 0;
    }

    for (r in a) {
      Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
    }

    p && p(n);

    while (f.length) {
      f.shift()();
    }

    return i.push.apply(i, l || []), t();
  }

  function t() {
    for (var e, n = 0; n < i.length; n++) {
      for (var t = i[n], r = !0, o = 1; o < t.length; o++) {
        var c = t[o];
        0 !== u[c] && (r = !1);
      }

      r && (i.splice(n--, 1), e = a(a.s = t[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      u = {
    "common/runtime": 0
  },
      i = [];

  function c(e) {
    return a.p + "" + e + ".js";
  }

  function a(n) {
    if (r[n]) return r[n].exports;
    var t = r[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(t.exports, t, t.exports, a), t.l = !0, t.exports;
  }

  a.e = function (e) {
    var n = [],
        t = {
      "components/uni-notice-bar/uni-notice-bar": 1,
      "components/uni-countdown/uni-countdown": 1,
      "components/uni-icons/uni-icons": 1
    };
    o[e] ? n.push(o[e]) : 0 !== o[e] && t[e] && n.push(o[e] = new Promise(function (n, t) {
      for (var r = ({
        "components/uni-notice-bar/uni-notice-bar": "components/uni-notice-bar/uni-notice-bar",
        "components/uni-countdown/uni-countdown": "components/uni-countdown/uni-countdown",
        "components/uni-icons/uni-icons": "components/uni-icons/uni-icons"
      }[e] || e) + ".wxss", u = a.p + r, i = document.getElementsByTagName("link"), c = 0; c < i.length; c++) {
        var l = i[c],
            s = l.getAttribute("data-href") || l.getAttribute("href");
        if ("stylesheet" === l.rel && (s === r || s === u)) return n();
      }

      var f = document.getElementsByTagName("style");

      for (c = 0; c < f.length; c++) {
        l = f[c], s = l.getAttribute("data-href");
        if (s === r || s === u) return n();
      }

      var p = document.createElement("link");
      p.rel = "stylesheet", p.type = "text/css", p.onload = n, p.onerror = function (n) {
        var r = n && n.target && n.target.src || u,
            i = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        i.request = r, delete o[e], p.parentNode.removeChild(p), t(i);
      }, p.href = u;
      var d = document.getElementsByTagName("head")[0];
      d.appendChild(p);
    }).then(function () {
      o[e] = 0;
    }));
    var r = u[e];
    if (0 !== r) if (r) n.push(r[2]);else {
      var i = new Promise(function (n, t) {
        r = u[e] = [n, t];
      });
      n.push(r[2] = i);
      var l,
          s = document.createElement("script");
      s.charset = "utf-8", s.timeout = 120, a.nc && s.setAttribute("nonce", a.nc), s.src = c(e), l = function l(n) {
        s.onerror = s.onload = null, clearTimeout(f);
        var t = u[e];

        if (0 !== t) {
          if (t) {
            var r = n && ("load" === n.type ? "missing" : n.type),
                o = n && n.target && n.target.src,
                i = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            i.type = r, i.request = o, t[1](i);
          }

          u[e] = void 0;
        }
      };
      var f = setTimeout(function () {
        l({
          type: "timeout",
          target: s
        });
      }, 12e4);
      s.onerror = s.onload = l, document.head.appendChild(s);
    }
    return Promise.all(n);
  }, a.m = e, a.c = r, a.d = function (e, n, t) {
    a.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    });
  }, a.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, a.t = function (e, n) {
    if (1 & n && (e = a(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (a.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var r in e) {
      a.d(t, r, function (n) {
        return e[n];
      }.bind(null, r));
    }
    return t;
  }, a.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return a.d(n, "a", n), n;
  }, a.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, a.p = "/", a.oe = function (e) {
    throw console.error(e), e;
  };
  var l = global["webpackJsonp"] = global["webpackJsonp"] || [],
      s = l.push.bind(l);
  l.push = n, l = l.slice();

  for (var f = 0; f < l.length; f++) {
    n(l[f]);
  }

  var p = s;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"08fa":function(module,exports,__webpack_require__){"use strict";(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */!function(){function t(t){if(t)d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d,this.buffer8=l;else if(a){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}var r="input is invalid type",e="object"==typeof window,i=e?window:{};i.JS_MD5_NO_WINDOW&&(e=!1);var s=!e&&"object"==typeof self,h=!i.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;h?i=global:s&&(i=self);var f=!i.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports,o=__webpack_require__("3c35"),a=!i.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,n="0123456789abcdef".split(""),u=[128,32768,8388608,-2147483648],y=[0,8,16,24],c=["hex","array","digest","buffer","arrayBuffer","base64"],p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),d=[],l;if(a){var A=new ArrayBuffer(68);l=new Uint8Array(A),d=new Uint32Array(A)}!i.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!a||!i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var b=function(e){return function(n){return new t(!0).update(n)[e]()}},v=function(){var e=b("hex");h&&(e=w(e)),e.create=function(){return new t},e.update=function(t){return e.create().update(t)};for(var n=0;n<c.length;++n){var r=c[n];e[r]=b(r)}return e},w=function w(t){var e=eval("require('crypto')"),i=eval("require('buffer').Buffer"),s=function(n){if("string"==typeof n)return e.createHash("md5").update(n,"utf8").digest("hex");if(null===n||void 0===n)throw r;return n.constructor===ArrayBuffer&&(n=new Uint8Array(n)),Array.isArray(n)||ArrayBuffer.isView(n)||n.constructor===i?e.createHash("md5").update(new i(n)).digest("hex"):t(n)};return s};t.prototype.update=function(t){if(!this.finalized){var e,n=typeof t;if("string"!==n){if("object"!==n)throw r;if(null===t)throw r;if(a&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||a&&ArrayBuffer.isView(t)))throw r;e=!0}for(var o,i,s=0,u=t.length,c=this.blocks,f=this.buffer8;s<u;){if(this.hashed&&(this.hashed=!1,c[0]=c[16],c[16]=c[1]=c[2]=c[3]=c[4]=c[5]=c[6]=c[7]=c[8]=c[9]=c[10]=c[11]=c[12]=c[13]=c[14]=c[15]=0),e)if(a)for(i=this.start;s<u&&i<64;++s)f[i++]=t[s];else for(i=this.start;s<u&&i<64;++s)c[i>>2]|=t[s]<<y[3&i++];else if(a)for(i=this.start;s<u&&i<64;++s)(o=t.charCodeAt(s))<128?f[i++]=o:o<2048?(f[i++]=192|o>>6,f[i++]=128|63&o):o<55296||o>=57344?(f[i++]=224|o>>12,f[i++]=128|o>>6&63,f[i++]=128|63&o):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++s)),f[i++]=240|o>>18,f[i++]=128|o>>12&63,f[i++]=128|o>>6&63,f[i++]=128|63&o);else for(i=this.start;s<u&&i<64;++s)(o=t.charCodeAt(s))<128?c[i>>2]|=o<<y[3&i++]:o<2048?(c[i>>2]|=(192|o>>6)<<y[3&i++],c[i>>2]|=(128|63&o)<<y[3&i++]):o<55296||o>=57344?(c[i>>2]|=(224|o>>12)<<y[3&i++],c[i>>2]|=(128|o>>6&63)<<y[3&i++],c[i>>2]|=(128|63&o)<<y[3&i++]):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++s)),c[i>>2]|=(240|o>>18)<<y[3&i++],c[i>>2]|=(128|o>>12&63)<<y[3&i++],c[i>>2]|=(128|o>>6&63)<<y[3&i++],c[i>>2]|=(128|63&o)<<y[3&i++]);this.lastByteIndex=i,this.bytes+=i-this.start,i>=64?(this.start=i-64,this.hash(),this.hashed=!0):this.start=i}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=u[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},t.prototype.hash=function(){var t,e,n,r,o,i,a=this.blocks;this.first?e=((e=((t=((t=a[0]-680876937)<<7|t>>>25)-271733879<<0)^(n=((n=(-271733879^(r=((r=(-1732584194^2004318071&t)+a[1]-117830708)<<12|r>>>20)+t<<0)&(-271733879^t))+a[2]-1126478375)<<17|n>>>15)+r<<0)&(r^t))+a[3]-1316259209)<<22|e>>>10)+n<<0:(t=this.h0,e=this.h1,n=this.h2,e=((e+=((t=((t+=((r=this.h3)^e&(n^r))+a[0]-680876936)<<7|t>>>25)+e<<0)^(n=((n+=(e^(r=((r+=(n^t&(e^n))+a[1]-389564586)<<12|r>>>20)+t<<0)&(t^e))+a[2]+606105819)<<17|n>>>15)+r<<0)&(r^t))+a[3]-1044525330)<<22|e>>>10)+n<<0),e=((e+=((t=((t+=(r^e&(n^r))+a[4]-176418897)<<7|t>>>25)+e<<0)^(n=((n+=(e^(r=((r+=(n^t&(e^n))+a[5]+1200080426)<<12|r>>>20)+t<<0)&(t^e))+a[6]-1473231341)<<17|n>>>15)+r<<0)&(r^t))+a[7]-45705983)<<22|e>>>10)+n<<0,e=((e+=((t=((t+=(r^e&(n^r))+a[8]+1770035416)<<7|t>>>25)+e<<0)^(n=((n+=(e^(r=((r+=(n^t&(e^n))+a[9]-1958414417)<<12|r>>>20)+t<<0)&(t^e))+a[10]-42063)<<17|n>>>15)+r<<0)&(r^t))+a[11]-1990404162)<<22|e>>>10)+n<<0,e=((e+=((t=((t+=(r^e&(n^r))+a[12]+1804603682)<<7|t>>>25)+e<<0)^(n=((n+=(e^(r=((r+=(n^t&(e^n))+a[13]-40341101)<<12|r>>>20)+t<<0)&(t^e))+a[14]-1502002290)<<17|n>>>15)+r<<0)&(r^t))+a[15]+1236535329)<<22|e>>>10)+n<<0,e=((e+=((r=((r+=(e^n&((t=((t+=(n^r&(e^n))+a[1]-165796510)<<5|t>>>27)+e<<0)^e))+a[6]-1069501632)<<9|r>>>23)+t<<0)^t&((n=((n+=(t^e&(r^t))+a[11]+643717713)<<14|n>>>18)+r<<0)^r))+a[0]-373897302)<<20|e>>>12)+n<<0,e=((e+=((r=((r+=(e^n&((t=((t+=(n^r&(e^n))+a[5]-701558691)<<5|t>>>27)+e<<0)^e))+a[10]+38016083)<<9|r>>>23)+t<<0)^t&((n=((n+=(t^e&(r^t))+a[15]-660478335)<<14|n>>>18)+r<<0)^r))+a[4]-405537848)<<20|e>>>12)+n<<0,e=((e+=((r=((r+=(e^n&((t=((t+=(n^r&(e^n))+a[9]+568446438)<<5|t>>>27)+e<<0)^e))+a[14]-1019803690)<<9|r>>>23)+t<<0)^t&((n=((n+=(t^e&(r^t))+a[3]-187363961)<<14|n>>>18)+r<<0)^r))+a[8]+1163531501)<<20|e>>>12)+n<<0,e=((e+=((r=((r+=(e^n&((t=((t+=(n^r&(e^n))+a[13]-1444681467)<<5|t>>>27)+e<<0)^e))+a[2]-51403784)<<9|r>>>23)+t<<0)^t&((n=((n+=(t^e&(r^t))+a[7]+1735328473)<<14|n>>>18)+r<<0)^r))+a[12]-1926607734)<<20|e>>>12)+n<<0,e=((e+=((i=(r=((r+=((o=e^n)^(t=((t+=(o^r)+a[5]-378558)<<4|t>>>28)+e<<0))+a[8]-2022574463)<<11|r>>>21)+t<<0)^t)^(n=((n+=(i^e)+a[11]+1839030562)<<16|n>>>16)+r<<0))+a[14]-35309556)<<23|e>>>9)+n<<0,e=((e+=((i=(r=((r+=((o=e^n)^(t=((t+=(o^r)+a[1]-1530992060)<<4|t>>>28)+e<<0))+a[4]+1272893353)<<11|r>>>21)+t<<0)^t)^(n=((n+=(i^e)+a[7]-155497632)<<16|n>>>16)+r<<0))+a[10]-1094730640)<<23|e>>>9)+n<<0,e=((e+=((i=(r=((r+=((o=e^n)^(t=((t+=(o^r)+a[13]+681279174)<<4|t>>>28)+e<<0))+a[0]-358537222)<<11|r>>>21)+t<<0)^t)^(n=((n+=(i^e)+a[3]-722521979)<<16|n>>>16)+r<<0))+a[6]+76029189)<<23|e>>>9)+n<<0,e=((e+=((i=(r=((r+=((o=e^n)^(t=((t+=(o^r)+a[9]-640364487)<<4|t>>>28)+e<<0))+a[12]-421815835)<<11|r>>>21)+t<<0)^t)^(n=((n+=(i^e)+a[15]+530742520)<<16|n>>>16)+r<<0))+a[2]-995338651)<<23|e>>>9)+n<<0,e=((e+=((r=((r+=(e^((t=((t+=(n^(e|~r))+a[0]-198630844)<<6|t>>>26)+e<<0)|~n))+a[7]+1126891415)<<10|r>>>22)+t<<0)^((n=((n+=(t^(r|~e))+a[14]-1416354905)<<15|n>>>17)+r<<0)|~t))+a[5]-57434055)<<21|e>>>11)+n<<0,e=((e+=((r=((r+=(e^((t=((t+=(n^(e|~r))+a[12]+1700485571)<<6|t>>>26)+e<<0)|~n))+a[3]-1894986606)<<10|r>>>22)+t<<0)^((n=((n+=(t^(r|~e))+a[10]-1051523)<<15|n>>>17)+r<<0)|~t))+a[1]-2054922799)<<21|e>>>11)+n<<0,e=((e+=((r=((r+=(e^((t=((t+=(n^(e|~r))+a[8]+1873313359)<<6|t>>>26)+e<<0)|~n))+a[15]-30611744)<<10|r>>>22)+t<<0)^((n=((n+=(t^(r|~e))+a[6]-1560198380)<<15|n>>>17)+r<<0)|~t))+a[13]+1309151649)<<21|e>>>11)+n<<0,e=((e+=((r=((r+=(e^((t=((t+=(n^(e|~r))+a[4]-145523070)<<6|t>>>26)+e<<0)|~n))+a[11]-1120210379)<<10|r>>>22)+t<<0)^((n=((n+=(t^(r|~e))+a[2]+718787259)<<15|n>>>17)+r<<0)|~t))+a[9]-343485551)<<21|e>>>11)+n<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=n-1732584194<<0,this.h3=r+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+n<<0,this.h3=this.h3+r<<0)},t.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,o=this.h3;return n[t>>4&15]+n[15&t]+n[t>>12&15]+n[t>>8&15]+n[t>>20&15]+n[t>>16&15]+n[t>>28&15]+n[t>>24&15]+n[e>>4&15]+n[15&e]+n[e>>12&15]+n[e>>8&15]+n[e>>20&15]+n[e>>16&15]+n[e>>28&15]+n[e>>24&15]+n[r>>4&15]+n[15&r]+n[r>>12&15]+n[r>>8&15]+n[r>>20&15]+n[r>>16&15]+n[r>>28&15]+n[r>>24&15]+n[o>>4&15]+n[15&o]+n[o>>12&15]+n[o>>8&15]+n[o>>20&15]+n[o>>16&15]+n[o>>28&15]+n[o>>24&15]},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,n=this.h2,r=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255]},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},t.prototype.buffer=t.prototype.arrayBuffer,t.prototype.base64=function(){for(var t,e,n,r="",o=this.array(),i=0;i<15;)t=o[i++],e=o[i++],n=o[i++],r+=p[t>>>2]+p[63&(t<<4|e>>>4)]+p[63&(e<<2|n>>>6)]+p[63&n];return t=o[i],r+(p[t>>>2]+p[t<<4&63]+"==")};var _=v();f?module.exports=_:(i.md5=_,o&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return _}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}()}).call(this,__webpack_require__("4362"),__webpack_require__("c8ba"))},"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(o){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),i="";if(o.length>1){var a=o.pop();i=o.join("---COMMA---"),0===a.indexOf(" at ")?i+=a:i+="---COMMA---"+a}else i=o[0];return i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var u,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var f=c.render;c.render=function(t,e){return u.call(e),f(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return r})},"36bf":function(t,e,n){"use strict";(function(t,n){function r(e,r){var o=this;t.request({url:this.getUrl("/api/version/id"),method:"GET",data:{search:"latestId"},success:function(i){if(200===i.data.code){var a=i.data.data,s=a.latest.id,u=a.latest.method;s?e!=s&&"force"===u?(console.log(n("确认强制更新，正在取得地址"," at components/checkUpdater.js:16")),t.request({url:o.getUrl("/api/version/info"),method:"GET",data:{search:"latestInfo"},success:function(e){if(200===e.statusCode){console.log(n("地址请求成功"," at components/checkUpdater.js:26"));var r=e.data.data,o=r.info.iosLink,i=r.info.androidLink,a="",s=!1;if("android"===plus.os.name.toLowerCase()?(console.log(n("安卓系统"," at components/checkUpdater.js:34")),i&&"#"!==i?(console.log(n("发现下载地址"," at components/checkUpdater.js:36")),i.match(RegExp(/.wgt/))?(console.log(n("确认wgt热更新包"," at components/checkUpdater.js:39")),a=i,s=!0):console.log(n("安卓推荐.wgt强制更新，.apk的强制更新请您自行修改程序"," at components/checkUpdater.js:43"))):console.log(n("下载地址是空的，无法继续"," at components/checkUpdater.js:46"))):(console.log(n("苹果系统"," at components/checkUpdater.js:49")),o&&"#"!==o?(console.log(n("发现下载地址"," at components/checkUpdater.js:51")),o.match(RegExp(/.wgt/))?(console.log(n("确认wgt热更新包"," at components/checkUpdater.js:54")),a=o,s=!0):console.log(n("苹果只支持.wgt强制更新"," at components/checkUpdater.js:58"))):console.log(n("下载地址是空的，无法继续"," at components/checkUpdater.js:61"))),s){console.log(n("任务开始"," at components/checkUpdater.js:65"));var u=t.downloadFile({url:a,success:function(e){200===e.statusCode&&(console.log(n("保存安装包"," at components/checkUpdater.js:71")),t.saveFile({tempFilePath:e.tempFilePath,success:function(e){var r=e.savedFilePath;t.setStorage({key:"updated",data:{completed:!1,packgePath:r},success:function(){console.log(n("成功保存记录"," at components/checkUpdater.js:84"))}}),console.log(n("任务完成，关闭下载任务，下一次启动应用时将安装更新"," at components/checkUpdater.js:88")),u.abort(),u=null}}))}})}else console.log(n("下载地址未准备，无法开启下载任务"," at components/checkUpdater.js:97"))}}})):e!=s?(console.log(n("检测到更新"," at components/checkUpdater.js:103")),t.showModal({title:"发现新版本",content:"有新版本可用 (版本id:"+s+")，请问您是否更新？",success:function(e){e.confirm?t.navigateTo({url:r}):e.cancel&&console.log(n("取消"," at components/checkUpdater.js:113"))}})):console.log(n("现在是最新版本"," at components/checkUpdater.js:118")):console.log(n("当前没有发行版本"," at components/checkUpdater.js:14"))}}})}Object.defineProperty(e,"__esModule",{value:!0}),e.checkUpdater=r}).call(this,n("6e42")["default"],n("0de9")["default"])},"3c35":function(t,e){(function(e){t.exports=e}).call(this,{})},4362:function(t,e,n){e.nextTick=function(t){setTimeout(t,0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function i(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function f(t){return"[object Object]"===c.call(t)}function l(t){return"[object RegExp]"===c.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}y("slot,component",!0);var _=y("key,ref,slot,slot-scope,is");function g(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function b(t,e){return m.call(t,e)}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var $=/-(\w)/g,k=w(function(t){return t.replace($,function(t,e){return e?e.toUpperCase():""})}),A=w(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),O=/\B([A-Z])/g,S=w(function(t){return t.replace(O,"-$1").toLowerCase()});function j(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function x(t,e){return t.bind(e)}var C=Function.prototype.bind?x:j;function D(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function E(t,e){for(var n in e)t[n]=e[n];return t}function T(t){for(var e={},n=0;n<t.length;n++)t[n]&&E(e,t[n]);return e}function P(t,e,n){}var B=function(t,e,n){return!1},I=function(t){return t};function N(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every(function(t,n){return N(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(o||i)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return N(t[n],e[n])})}catch(c){return!1}}function R(t,e){for(var n=0;n<t.length;n++)if(N(t[n],e))return n;return-1}function U(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var M=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:B,isReservedAttr:B,isUnknownElement:B,getTagNamespace:P,parsePlatformTagName:I,mustUseProp:B,async:!0,_lifecycleHooks:V},F=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function L(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var z=new RegExp("[^"+F.source+".$_\\d]");function J(t){if(!z.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var W,K="__proto__"in{},G="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Q=X&&WXEnvironment.platform.toLowerCase(),Y=G&&window.navigator.userAgent.toLowerCase(),Z=Y&&/msie|trident/.test(Y),tt=(Y&&Y.indexOf("msie 9.0"),Y&&Y.indexOf("edge/")>0),et=(Y&&Y.indexOf("android"),Y&&/iphone|ipad|ipod|ios/.test(Y)||"ios"===Q),nt=(Y&&/chrome\/\d+/.test(Y),Y&&/phantomjs/.test(Y),Y&&Y.match(/firefox\/(\d+)/),{}.watch);if(G)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(eo){}var ot=function(){return void 0===W&&(W=!G&&!X&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),W},it=G&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ut="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=P,ft=0,lt=function(){this.id=ft++,this.subs=[]};function pt(t){lt.SharedObject.targetStack.push(t),lt.SharedObject.target=t}function ht(){lt.SharedObject.targetStack.pop(),lt.SharedObject.target=lt.SharedObject.targetStack[lt.SharedObject.targetStack.length-1]}lt.prototype.addSub=function(t){this.subs.push(t)},lt.prototype.removeSub=function(t){g(this.subs,t)},lt.prototype.depend=function(){lt.SharedObject.target&&lt.SharedObject.target.addDep(this)},lt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},lt.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},lt.SharedObject.target=null,lt.SharedObject.targetStack=[];var dt=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,vt);var yt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function _t(t){return new dt(void 0,void 0,void 0,String(t))}function gt(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var mt=Array.prototype,bt=Object.create(mt),wt=["push","pop","shift","unshift","splice","sort","reverse"];wt.forEach(function(t){var e=mt[t];H(bt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var $t=Object.getOwnPropertyNames(bt),kt=!0;function At(t){kt=t}var Ot=function(t){this.value=t,this.dep=new lt,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(K?t.push!==t.__proto__.push?jt(t,bt,$t):St(t,bt):jt(t,bt,$t),this.observeArray(t)):this.walk(t)};function St(t,e){t.__proto__=e}function jt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];H(t,i,e[i])}}function xt(t,e){var n;if(u(t)&&!(t instanceof dt))return b(t,"__ob__")&&t.__ob__ instanceof Ot?n=t.__ob__:kt&&!ot()&&(Array.isArray(t)||f(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Ot(t)),e&&n&&n.vmCount++,n}function Ct(t,e,n,r,o){var i=new lt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,u=a&&a.set;s&&!u||2!==arguments.length||(n=t[e]);var c=!o&&xt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return lt.SharedObject.target&&(i.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Tt(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!u||(u?u.call(t,e):n=e,c=!o&&xt(e),i.notify())}})}}function Dt(t,e,n){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Ct(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Et(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function Tt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Tt(e)}Ot.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Ct(t,e[n])},Ot.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)xt(t[e])};var Pt=q.optionMergeStrategies;function Bt(t,e){if(!e)return t;for(var n,r,o,i=ut?Reflect.ownKeys(e):Object.keys(e),a=0;a<i.length;a++)n=i[a],"__ob__"!==n&&(r=t[n],o=e[n],b(t,n)?r!==o&&f(r)&&f(o)&&Bt(r,o):Dt(t,n,o));return t}function It(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,o="function"===typeof t?t.call(n,n):t;return r?Bt(r,o):o}:e?t?function(){return Bt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Nt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Rt(n):n}function Rt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Ut(t,e,n,r){var o=Object.create(t||null);return e?E(o,e):o}Pt.data=function(t,e,n){return n?It(t,e,n):e&&"function"!==typeof e?t:It(t,e)},V.forEach(function(t){Pt[t]=Nt}),M.forEach(function(t){Pt[t+"s"]=Ut}),Pt.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var i in E(o,t),e){var a=o[i],s=e[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(s):Array.isArray(s)?s:[s]}return o},Pt.props=Pt.methods=Pt.inject=Pt.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return E(o,t),e&&E(o,e),o},Pt.provide=It;var Mt=function(t,e){return void 0===e?t:e};function Vt(t,e){var n=t.props;if(n){var r,o,i,a={};if(Array.isArray(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(i=k(o),a[i]={type:null})}else if(f(n))for(var s in n)o=n[s],i=k(s),a[i]=f(o)?o:{type:o};else 0;t.props=a}}function qt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(f(n))for(var i in n){var a=n[i];r[i]=f(a)?E({from:i},a):{from:a}}else 0}}function Ft(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Lt(t,e,n){if("function"===typeof e&&(e=e.options),Vt(e,n),qt(e,n),Ft(e),!e._base&&(e.extends&&(t=Lt(t,e.extends,n)),e.mixins))for(var r=0,o=e.mixins.length;r<o;r++)t=Lt(t,e.mixins[r],n);var i,a={};for(i in t)s(i);for(i in e)b(t,i)||s(i);function s(r){var o=Pt[r]||Mt;a[r]=o(t[r],e[r],n,r)}return a}function Ht(t,e,n,r){if("string"===typeof n){var o=t[e];if(b(o,n))return o[n];var i=k(n);if(b(o,i))return o[i];var a=A(i);if(b(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function zt(t,e,n,r){var o=e[t],i=!b(n,t),a=n[t],s=Gt(Boolean,o.type);if(s>-1)if(i&&!b(o,"default"))a=!1;else if(""===a||a===S(t)){var u=Gt(String,o.type);(u<0||s<u)&&(a=!0)}if(void 0===a){a=Jt(r,o,t);var c=kt;At(!0),xt(a),At(c)}return a}function Jt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Wt(e.type)?r.call(t):r}}function Wt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Kt(t,e){return Wt(t)===Wt(e)}function Gt(t,e){if(!Array.isArray(e))return Kt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Kt(e[n],t))return n;return-1}function Xt(t,e,n){pt();try{if(e){var r=e;while(r=r.$parent){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var a=!1===o[i].call(r,t,e,n);if(a)return}catch(eo){Yt(eo,r,"errorCaptured hook")}}}Yt(t,e,n)}finally{ht()}}function Qt(t,e,n,r,o){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&h(i)&&!i._handled&&(i.catch(function(t){return Xt(t,r,o+" (Promise/async)")}),i._handled=!0)}catch(eo){Xt(eo,r,o)}return i}function Yt(t,e,n){if(q.errorHandler)try{return q.errorHandler.call(null,t,e,n)}catch(eo){eo!==t&&Zt(eo,null,"config.errorHandler")}Zt(t,e,n)}function Zt(t,e,n){if(!G&&!X||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function re(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var oe=Promise.resolve();te=function(){oe.then(re),et&&setTimeout(P)}}else if(Z||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var ie=1,ae=new MutationObserver(re),se=document.createTextNode(String(ie));ae.observe(se,{characterData:!0}),te=function(){ie=(ie+1)%2,se.data=String(ie)}}function ue(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(eo){Xt(eo,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function fe(t){le(t,ce),ce.clear()}function le(t,e){var n,r,o=Array.isArray(t);if(!(!o&&!u(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)le(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)le(t[r[n]],e)}}}var pe=w(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function he(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Qt(r,null,arguments,e,"v-on handler");for(var o=r.slice(),i=0;i<o.length;i++)Qt(o[i],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,o,a,s){var u,c,f,l;for(u in t)c=t[u],f=e[u],l=pe(u),r(c)||(r(f)?(r(c.fns)&&(c=t[u]=he(c,s)),i(l.once)&&(c=t[u]=a(l.name,c,l.capture)),n(l.name,c,l.capture,l.passive,l.params)):c!==f&&(f.fns=c,t[u]=f));for(u in e)r(t[u])&&(l=pe(u),o(l.name,e[u],l.capture))}function ve(t,e,n){var i=e.options.props;if(!r(i)){var a={},s=t.attrs,u=t.props;if(o(s)||o(u))for(var c in i){var f=S(c);ye(a,u,c,f,!0)||ye(a,s,c,f,!1)}return a}}function ye(t,e,n,r,i){if(o(e)){if(b(e,n))return t[n]=e[n],i||delete e[n],!0;if(b(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function _e(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function ge(t){return s(t)?[_t(t)]:Array.isArray(t)?be(t):void 0}function me(t){return o(t)&&o(t.text)&&a(t.isComment)}function be(t,e){var n,a,u,c,f=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(u=f.length-1,c=f[u],Array.isArray(a)?a.length>0&&(a=be(a,(e||"")+"_"+n),me(a[0])&&me(c)&&(f[u]=_t(c.text+a[0].text),a.shift()),f.push.apply(f,a)):s(a)?me(c)?f[u]=_t(c.text+a):""!==a&&f.push(_t(a)):me(a)&&me(c)?f[u]=_t(c.text+a.text):(i(t._isVList)&&o(a.tag)&&r(a.key)&&o(e)&&(a.key="__vlist"+e+"_"+n+"__"),f.push(a)));return f}function we(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function $e(t){var e=ke(t.$options.inject,t);e&&(At(!1),Object.keys(e).forEach(function(n){Ct(t,n,e[n])}),At(!0))}function ke(t,e){if(t){for(var n=Object.create(null),r=ut?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){var a=t[i].from,s=e;while(s){if(s._provided&&b(s._provided,a)){n[i]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[i]){var u=t[i].default;n[i]="function"===typeof u?u.call(e):u}else 0}}return n}}function Ae(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==e&&i.fnContext!==e||!a||null==a.slot)i.asyncMeta&&i.asyncMeta.data&&"page"===i.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(i):(n.default||(n.default=[])).push(i);else{var s=a.slot,u=n[s]||(n[s]=[]);"template"===i.tag?u.push.apply(u,i.children||[]):u.push(i)}}for(var c in n)n[c].every(Oe)&&delete n[c];return n}function Oe(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Se(t,e,r){var o,i=Object.keys(e).length>0,a=t?!!t.$stable:!i,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&s===r.$key&&!i&&!r.$hasNormal)return r;for(var u in o={},t)t[u]&&"$"!==u[0]&&(o[u]=je(e,u,t[u]))}else o={};for(var c in e)c in o||(o[c]=xe(e,c));return t&&Object.isExtensible(t)&&(t._normalized=o),H(o,"$stable",a),H(o,"$key",s),H(o,"$hasNormal",i),o}function je(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:ge(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function xe(t,e){return function(){return t[e]}}function Ce(t,e){var n,r,i,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))if(ut&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),f=c.next();while(!f.done)n.push(e(f.value,n.length)),f=c.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,i=a.length;r<i;r++)s=a[r],n[r]=e(t[s],s,r);return o(n)||(n=[]),n._isVList=!0,n}function De(t,e,n,r){var o,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=E(E({},r),n)),o=i(n)||e):o=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},o):o}function Ee(t){return Ht(this.$options,"filters",t,!0)||I}function Te(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Pe(t,e,n,r,o){var i=q.keyCodes[e]||n;return o&&r&&!q.keyCodes[e]?Te(o,r):i?Te(i,t):r?S(r)!==e:void 0}function Be(t,e,n,r,o){if(n)if(u(n)){var i;Array.isArray(n)&&(n=T(n));var a=function(a){if("class"===a||"style"===a||_(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||q.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var u=k(a),c=S(a);if(!(u in i)&&!(c in i)&&(i[a]=n[a],o)){var f=t.on||(t.on={});f["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Ie(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Re(r,"__static__"+t,!1),r)}function Ne(t,e,n){return Re(t,"__once__"+e+(n?"_"+n:""),!0),t}function Re(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Ue(t[r],e+"_"+r,n);else Ue(t,e,n)}function Ue(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Me(t,e){if(e)if(f(e)){var n=t.on=t.on?E({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}else;return t}function Ve(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?Ve(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function qe(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Fe(t,e){return"string"===typeof t?e+t:t}function Le(t){t._o=Ne,t._n=v,t._s=d,t._l=Ce,t._t=De,t._q=N,t._i=R,t._m=Ie,t._f=Ee,t._k=Pe,t._b=Be,t._v=_t,t._e=yt,t._u=Ve,t._g=Me,t._d=qe,t._p=Fe}function He(t,e,r,o,a){var s,u=this,c=a.options;b(o,"_uid")?(s=Object.create(o),s._original=o):(s=o,o=o._original);var f=i(c._compiled),l=!f;this.data=t,this.props=e,this.children=r,this.parent=o,this.listeners=t.on||n,this.injections=ke(c.inject,o),this.slots=function(){return u.$slots||Se(t.scopedSlots,u.$slots=Ae(r,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Se(t.scopedSlots,this.slots())}}),f&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=Se(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,r){var i=rn(s,t,e,n,r,l);return i&&!Array.isArray(i)&&(i.fnScopeId=c._scopeId,i.fnContext=o),i}:this._c=function(t,e,n,r){return rn(s,t,e,n,r,l)}}function ze(t,e,r,i,a){var s=t.options,u={},c=s.props;if(o(c))for(var f in c)u[f]=zt(f,c,e||n);else o(r.attrs)&&We(u,r.attrs),o(r.props)&&We(u,r.props);var l=new He(r,u,a,i,t),p=s.render.call(null,l._c,l);if(p instanceof dt)return Je(p,r,l.parent,s,l);if(Array.isArray(p)){for(var h=ge(p)||[],d=new Array(h.length),v=0;v<h.length;v++)d[v]=Je(h[v],r,l.parent,s,l);return d}}function Je(t,e,n,r,o){var i=gt(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function We(t,e){for(var n in e)t[k(n)]=e[n]}Le(He.prototype);var Ke={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Ke.prepatch(n,n)}else{var r=t.componentInstance=Qe(t,kn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;jn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,En(n,"mounted")),t.data.keepAlive&&(e._isMounted?Ln(n):Cn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Dn(e,!0):e.$destroy())}},Ge=Object.keys(Ke);function Xe(t,e,n,a,s){if(!r(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var f;if(r(t.cid)&&(f=t,t=dn(f,c),void 0===t))return hn(f,e,n,a,s);e=e||{},pr(t),o(e.model)&&tn(t.options,e);var l=ve(e,t,s);if(i(t.options.functional))return ze(t,l,e,n,a);var p=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var h=e.slot;e={},h&&(e.slot=h)}Ye(e);var d=t.options.name||s,v=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:p,tag:s,children:a},f);return v}}}function Qe(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Ye(t){for(var e=t.hook||(t.hook={}),n=0;n<Ge.length;n++){var r=Ge[n],o=e[r],i=Ke[r];o===i||o&&o._merged||(e[r]=o?Ze(i,o):i)}}function Ze(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),a=i[r],s=e.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(i[r]=[s].concat(a)):i[r]=s}var en=1,nn=2;function rn(t,e,n,r,o,a){return(Array.isArray(n)||s(n))&&(o=r,r=n,n=void 0),i(a)&&(o=nn),on(t,e,n,r,o)}function on(t,e,n,r,i){if(o(n)&&o(n.__ob__))return yt();if(o(n)&&o(n.is)&&(e=n.is),!e)return yt();var a,s,u;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===nn?r=ge(r):i===en&&(r=_e(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||q.getTagNamespace(e),a=q.isReservedTag(e)?new dt(q.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(u=Ht(t.$options,"components",e))?new dt(e,n,r,void 0,void 0,t):Xe(u,n,t,r,e)):a=Xe(e,n,t,r);return Array.isArray(a)?a:o(a)?(o(s)&&an(a,s),o(n)&&sn(n),a):yt()}function an(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var a=0,s=t.children.length;a<s;a++){var u=t.children[a];o(u.tag)&&(r(u.ns)||i(n)&&"svg"!==u.tag)&&an(u,e,n)}}function sn(t){u(t.style)&&fe(t.style),u(t.class)&&fe(t.class)}function un(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,o=r&&r.context;t.$slots=Ae(e._renderChildren,o),t.$scopedSlots=n,t._c=function(e,n,r,o){return rn(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return rn(t,e,n,r,o,!0)};var i=r&&r.data;Ct(t,"$attrs",i&&i.attrs||n,null,!0),Ct(t,"$listeners",e._parentListeners||n,null,!0)}var cn,fn=null;function ln(t){Le(t.prototype),t.prototype.$nextTick=function(t){return ue(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&(e.$scopedSlots=Se(o.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=o;try{fn=e,t=r.call(e._renderProxy,e.$createElement)}catch(eo){Xt(eo,e,"render"),t=e._vnode}finally{fn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=yt()),t.parent=o,t}}function pn(t,e){return(t.__esModule||ut&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function hn(t,e,n,r,o){var i=yt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function dn(t,e){if(i(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=fn;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),i(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var a=t.owners=[n],s=!0,c=null,f=null;n.$on("hook:destroyed",function(){return g(a,n)});var l=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==c&&(clearTimeout(c),c=null),null!==f&&(clearTimeout(f),f=null))},p=U(function(n){t.resolved=pn(n,e),s?a.length=0:l(!0)}),d=U(function(e){o(t.errorComp)&&(t.error=!0,l(!0))}),v=t(p,d);return u(v)&&(h(v)?r(t.resolved)&&v.then(p,d):h(v.component)&&(v.component.then(p,d),o(v.error)&&(t.errorComp=pn(v.error,e)),o(v.loading)&&(t.loadingComp=pn(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout(function(){c=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,l(!1))},v.delay||200)),o(v.timeout)&&(f=setTimeout(function(){f=null,r(t.resolved)&&d(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function vn(t){return t.isComment&&t.asyncFactory}function yn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||vn(n)))return n}}function _n(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&wn(t,e)}function gn(t,e){cn.$on(t,e)}function mn(t,e){cn.$off(t,e)}function bn(t,e){var n=cn;return function r(){var o=e.apply(null,arguments);null!==o&&n.$off(t,r)}}function wn(t,e,n){cn=t,de(e,n||{},gn,mn,bn,t),cn=void 0}function $n(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var o=0,i=t.length;o<i;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var i,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(i=a[s],i===e||i.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?D(n):n;for(var r=D(arguments,1),o='event handler for "'+t+'"',i=0,a=n.length;i<a;i++)Qt(n[i],e,r,e,o)}return e}}var kn=null;function An(t){var e=kn;return kn=t,function(){kn=e}}function On(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Sn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,o=n._vnode,i=An(n);n._vnode=t,n.$el=o?n.__patch__(o,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){En(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||g(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),En(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function jn(t,e,r,o,i){var a=o.data.scopedSlots,s=t.$scopedSlots,u=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),c=!!(i||t.$options._renderChildren||u);if(t.$options._parentVnode=o,t.$vnode=o,t._vnode&&(t._vnode.parent=o),t.$options._renderChildren=i,t.$attrs=o.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){At(!1);for(var f=t._props,l=t.$options._propKeys||[],p=0;p<l.length;p++){var h=l[p],d=t.$options.props;f[h]=zt(h,d,e,t)}At(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,wn(t,r,v),c&&(t.$slots=Ae(i,o.context),t.$forceUpdate())}function xn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Cn(t,e){if(e){if(t._directInactive=!1,xn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Cn(t.$children[n]);En(t,"activated")}}function Dn(t,e){if((!e||(t._directInactive=!0,!xn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);En(t,"deactivated")}}function En(t,e){pt();var n=t.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Qt(n[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),ht()}var Tn=[],Pn=[],Bn={},In=!1,Nn=!1,Rn=0;function Un(){Rn=Tn.length=Pn.length=0,Bn={},In=Nn=!1}var Mn=Date.now;if(G&&!Z){var Vn=window.performance;Vn&&"function"===typeof Vn.now&&Mn()>document.createEvent("Event").timeStamp&&(Mn=function(){return Vn.now()})}function qn(){var t,e;for(Mn(),Nn=!0,Tn.sort(function(t,e){return t.id-e.id}),Rn=0;Rn<Tn.length;Rn++)t=Tn[Rn],t.before&&t.before(),e=t.id,Bn[e]=null,t.run();var n=Pn.slice(),r=Tn.slice();Un(),Hn(n),Fn(r),it&&q.devtools&&it.emit("flush")}function Fn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&En(r,"updated")}}function Ln(t){t._inactive=!1,Pn.push(t)}function Hn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Cn(t[e],!0)}function zn(t){var e=t.id;if(null==Bn[e]){if(Bn[e]=!0,Nn){var n=Tn.length-1;while(n>Rn&&Tn[n].id>t.id)n--;Tn.splice(n+1,0,t)}else Tn.push(t);In||(In=!0,ue(qn))}}var Jn=0,Wn=function(t,e,n,r,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Jn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=J(e),this.getter||(this.getter=P)),this.value=this.lazy?void 0:this.get()};Wn.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(eo){if(!this.user)throw eo;Xt(eo,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&fe(t),ht(),this.cleanupDeps()}return t},Wn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Wn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Wn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():zn(this)},Wn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(eo){Xt(eo,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Wn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Wn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Wn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Kn={enumerable:!0,configurable:!0,get:P,set:P};function Gn(t,e,n){Kn.get=function(){return this[e][n]},Kn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Kn)}function Xn(t){t._watchers=[];var e=t.$options;e.props&&Qn(t,e.props),e.methods&&ir(t,e.methods),e.data?Yn(t):xt(t._data={},!0),e.computed&&er(t,e.computed),e.watch&&e.watch!==nt&&ar(t,e.watch)}function Qn(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||At(!1);var a=function(i){o.push(i);var a=zt(i,e,n,t);Ct(r,i,a),i in t||Gn(t,"_props",i)};for(var s in e)a(s);At(!0)}function Yn(t){var e=t.$options.data;e=t._data="function"===typeof e?Zn(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];0,r&&b(r,i)||L(i)||Gn(t,"_data",i)}xt(e,!0)}function Zn(t,e){pt();try{return t.call(e,e)}catch(eo){return Xt(eo,e,"data()"),{}}finally{ht()}}var tr={lazy:!0};function er(t,e){var n=t._computedWatchers=Object.create(null),r=ot();for(var o in e){var i=e[o],a="function"===typeof i?i:i.get;0,r||(n[o]=new Wn(t,a||P,P,tr)),o in t||nr(t,o,i)}}function nr(t,e,n){var r=!ot();"function"===typeof n?(Kn.get=r?rr(e):or(n),Kn.set=P):(Kn.get=n.get?r&&!1!==n.cache?rr(e):or(n.get):P,Kn.set=n.set||P),Object.defineProperty(t,e,Kn)}function rr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),lt.SharedObject.target&&e.depend(),e.value}}function or(t){return function(){return t.call(this,this)}}function ir(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?P:C(e[n],t)}function ar(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)sr(t,n,r[o]);else sr(t,n,r)}}function sr(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function ur(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Dt,t.prototype.$delete=Et,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return sr(r,t,e,n);n=n||{},n.user=!0;var o=new Wn(r,t,e,n);if(n.immediate)try{e.call(r,o.value)}catch(i){Xt(i,r,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}var cr=0;function fr(t){t.prototype._init=function(t){var e=this;e._uid=cr++,e._isVue=!0,t&&t._isComponent?lr(e,t):e.$options=Lt(pr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,On(e),_n(e),un(e),En(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&$e(e),Xn(e),"mp-toutiao"!==e.mpHost&&we(e),"mp-toutiao"!==e.mpHost&&En(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function lr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function pr(t){var e=t.options;if(t.super){var n=pr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=hr(t);o&&E(t.extendOptions,o),e=t.options=Lt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function hr(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}function dr(t){this._init(t)}function vr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=D(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function yr(t){t.mixin=function(t){return this.options=Lt(this.options,t),this}}function _r(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Lt(n.options,t),a["super"]=n,a.options.props&&gr(a),a.options.computed&&mr(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,M.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=E({},a.options),o[r]=a,a}}function gr(t){var e=t.options.props;for(var n in e)Gn(t.prototype,"_props",n)}function mr(t){var e=t.options.computed;for(var n in e)nr(t.prototype,n,e[n])}function br(t){M.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function wr(t){return t&&(t.Ctor.options.name||t.tag)}function $r(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function kr(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var a=n[i];if(a){var s=wr(a.componentOptions);s&&!e(s)&&Ar(n,i,r,o)}}}function Ar(t,e,n,r){var o=t[e];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[e]=null,g(n,e)}fr(dr),ur(dr),$n(dr),Sn(dr),ln(dr);var Or=[String,RegExp,Array],Sr={name:"keep-alive",abstract:!0,props:{include:Or,exclude:Or,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Ar(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){kr(t,function(t){return $r(e,t)})}),this.$watch("exclude",function(e){kr(t,function(t){return!$r(e,t)})})},render:function(){var t=this.$slots.default,e=yn(t),n=e&&e.componentOptions;if(n){var r=wr(n),o=this,i=o.include,a=o.exclude;if(i&&(!r||!$r(i,r))||a&&r&&$r(a,r))return e;var s=this,u=s.cache,c=s.keys,f=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;u[f]?(e.componentInstance=u[f].componentInstance,g(c,f),c.push(f)):(u[f]=e,c.push(f),this.max&&c.length>parseInt(this.max)&&Ar(u,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},jr={KeepAlive:Sr};function xr(t){var e={get:function(){return q}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:E,mergeOptions:Lt,defineReactive:Ct},t.set=Dt,t.delete=Et,t.nextTick=ue,t.observable=function(t){return xt(t),t},t.options=Object.create(null),M.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,E(t.options.components,jr),vr(t),yr(t),_r(t),br(t)}xr(dr),Object.defineProperty(dr.prototype,"$isServer",{get:ot}),Object.defineProperty(dr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(dr,"FunctionalRenderContext",{value:He}),dr.version="2.6.10";var Cr="[object Array]",Dr="[object Object]";function Er(t,e){var n={};return Tr(t,e),Pr(t,e,"",n),n}function Tr(t,e){if(t!==e){var n=Ir(t),r=Ir(e);if(n==Dr&&r==Dr){if(Object.keys(t).length>=Object.keys(e).length)for(var o in e){var i=t[o];void 0===i?t[o]=null:Tr(i,e[o])}}else n==Cr&&r==Cr&&t.length>=e.length&&e.forEach(function(e,n){Tr(t[n],e)})}}function Pr(t,e,n,r){if(t!==e){var o=Ir(t),i=Ir(e);if(o==Dr)if(i!=Dr||Object.keys(t).length<Object.keys(e).length)Br(r,n,t);else{var a=function(o){var i=t[o],a=e[o],s=Ir(i),u=Ir(a);if(s!=Cr&&s!=Dr)i!=e[o]&&Br(r,(""==n?"":n+".")+o,i);else if(s==Cr)u!=Cr?Br(r,(""==n?"":n+".")+o,i):i.length<a.length?Br(r,(""==n?"":n+".")+o,i):i.forEach(function(t,e){Pr(t,a[e],(""==n?"":n+".")+o+"["+e+"]",r)});else if(s==Dr)if(u!=Dr||Object.keys(i).length<Object.keys(a).length)Br(r,(""==n?"":n+".")+o,i);else for(var c in i)Pr(i[c],a[c],(""==n?"":n+".")+o+"."+c,r)};for(var s in t)a(s)}else o==Cr?i!=Cr?Br(r,n,t):t.length<e.length?Br(r,n,t):t.forEach(function(t,o){Pr(t,e[o],n+"["+o+"]",r)}):Br(r,n,t)}}function Br(t,e,n){t[e]=n}function Ir(t){return Object.prototype.toString.call(t)}function Nr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Rr(t){return Tn.find(function(e){return t._watcher===e})}function Ur(t,e){if(!t.__next_tick_pending&&!Rr(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ue(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var o;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(eo){Xt(eo,t,"nextTick")}else o&&o(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){o=t})}function Mr(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Vr=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,o=Object.create(null);try{o=Mr(this)}catch(s){console.error(s)}o.__webviewId__=r.data.__webviewId__;var i=Object.create(null);Object.keys(o).forEach(function(t){i[t]=r.data[t]});var a=Er(o,i);Object.keys(a).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,Nr(n)})):Nr(this)}};function qr(){}function Fr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=qr),t.$options.render||(t.$options.render=qr),"mp-toutiao"!==t.mpHost&&En(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Wn(t,r,P,{before:function(){t._isMounted&&!t._isDestroyed&&En(t,"beforeUpdate")}},!0),n=!1,t}function Lr(t,e){return o(t)||o(e)?Hr(t,zr(e)):""}function Hr(t,e){return t?e?t+" "+e:t:e||""}function zr(t){return Array.isArray(t)?Jr(t):u(t)?Wr(t):"string"===typeof t?t:""}function Jr(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=zr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Wr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Kr=w(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Gr(t){return Array.isArray(t)?T(t):"string"===typeof t?Kr(t):t}var Xr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Qr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Qr(t[r],n.slice(1).join("."))}function Yr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:D(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Ur(this,t)},Xr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=we,t.prototype.__init_injections=$e,t.prototype.__call_hook=function(t,e){var n=this;pt();var r,o=n.$options[t],i=t+" hook";if(o)for(var a=0,s=o.length;a<s;a++)r=Qt(o[a],n,e?[e]:null,n,i);return n._hasHookEvent&&n.$emit("hook:"+t),ht(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return f(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Qr(e||this,t)},t.prototype.__get_class=function(t,e){return Lr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Gr(t),r=e?E(e,n):n;return Object.keys(r).map(function(t){return S(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,o,i,a;if(Array.isArray(t)){for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);return n}if(u(t)){for(i=Object.keys(t),n=Object.create(null),r=0,o=i.length;r<o;r++)a=i[r],n[a]=e(t[a],a,r);return n}return[]}}var Zr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function to(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==Zr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;Zr.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=Zr}dr.prototype.__patch__=Vr,dr.prototype.$mount=function(t,e){return Fr(this,t,e)},to(dr),Yr(dr),e["default"]=dr}.call(this,n("c8ba"))},"6aa7":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pages:{"pages/index/index":{navigationBarTitleText:"首页",navigationBarBackgroundColor:"#000000",backgroundColor:"#000000",enablePullDownRefresh:!0,titleNView:!1},"pages/registLogin/registLogin":{navigationBarTitleText:"登录",navigationBarBackgroundColor:"#000000",backgroundColor:"#000000",titleNView:!1},"pages/registLogin/regist":{navigationBarTitleText:"注册",navigationBarBackgroundColor:"#000000",backgroundColor:"#000000",titleNView:!1},"pages/my/my":{navigationBarTitleText:"我的",navigationBarBackgroundColor:"#19233C",backgroundColor:"#19233C"},"pages/my/grab":{navigationBarTitleText:"抢单",navigationBarBackgroundColor:"#19233C",backgroundColor:"#19233C"},"pages/my/myInfo":{navigationBarTitleText:"我的信息",navigationBarBackgroundColor:"#19233C",backgroundColor:"#19233C"},"pages/my/withdraw":{navigationBarTitleText:"申请提现",navigationBarBackgroundColor:"#19233C",backgroundColor:"#19233C"},"pages/my/depositWithdraw":{navigationBarTitleText:"保证金提现",navigationBarBackgroundColor:"#19233C",backgroundColor:"#19233C"},"pages/my/complaint":{navigationBarTitleText:"投诉",navigationBarBackgroundColor:"#19233C",backgroundColor:"#19233C"},"pages/my/myComplaint":{navigationBarTitleText:"我的投诉",navigationBarBackgroundColor:"#19233C",backgroundColor:"#19233C",enablePullDownRefresh:!0},"pages/my/deposit":{navigationBarTitleText:"保证金缴纳",navigationBarBackgroundColor:"#19233C",backgroundColor:"#19233C"},"pages/help/help":{navigationBarTitleText:"帮助",navigationBarBackgroundColor:"#19233C",backgroundColor:"#19233C"},"pages/my/myTeam":{navigationBarTitleText:"我的团队",navigationBarBackgroundColor:"#19233C",backgroundColor:"#19233C"},"pages/my/myTransaction":{navigationBarTitleText:"我的交易",navigationBarBackgroundColor:"#19233C",backgroundColor:"#19233C",enablePullDownRefresh:!0},"pages/my/myWithdraw":{navigationBarTitleText:"提现记录",navigationBarBackgroundColor:"#19233C",backgroundColor:"#19233C",enablePullDownRefresh:!0},"pages/my/myMessage":{navigationBarTitleText:"我的消息",navigationBarBackgroundColor:"#19233C",backgroundColor:"#19233C"},"pages/update/index":{navigationBarTitleText:"软件更新",navigationBarBackgroundColor:"#19233C",navigationBarTextStyle:"white",enablePullDownRefresh:!0,titleNView:{backgroundColor:"#19233C"},pullToRefresh:{support:!0,color:"#19233C",style:"circle"}}},globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"抢单系统",navigationBarBackgroundColor:"black",backgroundColor:"black"}};e.default=r},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=Ae,e.createPage=ke,e.default=void 0;var r=o(n("66fd"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return u(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(u){o=!0,i=u}finally{try{r||null==s["return"]||s["return"]()}finally{if(o)throw i}}return n}function u(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return h(t)||p(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function h(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function y(t){return"function"===typeof t}function _(t){return"string"===typeof t}function g(t){return"[object Object]"===d.call(t)}function m(t,e){return v.call(t,e)}function b(){}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var $=/-(\w)/g,k=w(function(t){return t.replace($,function(t,e){return e?e.toUpperCase():""})}),A=["invoke","success","fail","complete","returnValue"],O={},S={};function j(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?x(n):n}function x(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function C(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function D(t,e){Object.keys(e).forEach(function(n){-1!==A.indexOf(n)&&y(e[n])&&(t[n]=j(t[n],e[n]))})}function E(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==A.indexOf(n)&&y(e[n])&&C(t[n],e[n])})}function T(t,e){"string"===typeof t&&g(e)?D(S[t]||(S[t]={}),e):g(t)&&D(O,t)}function P(t,e){"string"===typeof t?g(e)?E(S[t],e):delete S[t]:g(t)&&E(O,t)}function B(t){return function(e){return t(e)||e}}function I(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function N(t,e){for(var n=!1,r=0;r<t.length;r++){var o=t[r];if(n)n=Promise.then(B(o));else{var i=o(e);if(I(i)&&(n=Promise.resolve(i)),!1===i)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function R(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){N(t[n],e).then(function(t){return y(r)&&r(t)||t})}}}),e}function U(t,e){var n=[];Array.isArray(O.returnValue)&&n.push.apply(n,f(O.returnValue));var r=S[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,f(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function M(t){var e=Object.create(null);Object.keys(O).forEach(function(t){"returnValue"!==t&&(e[t]=O[t].slice())});var n=S[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function V(t,e,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];var a=M(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=N(a.invoke,n);return s.then(function(t){return e.apply(void 0,[R(a,t)].concat(o))})}return e.apply(void 0,[R(a,n)].concat(o))}return e.apply(void 0,[n].concat(o))}var q={returnValue:function(t){return I(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},F=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,L=/^create|Manager$/,H=/^on/;function z(t){return L.test(t)}function J(t){return F.test(t)}function W(t){return H.test(t)&&"onPush"!==t}function K(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function G(t){return!(z(t)||J(t)||W(t))}function X(t,e){return G(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return y(n.success)||y(n.fail)||y(n.complete)?U(t,V.apply(void 0,[t,e,n].concat(o))):U(t,K(new Promise(function(r,i){V.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:i})].concat(o)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var Q=1e-4,Y=750,Z=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,Z="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Y*(e||tt);return n<0&&(n=-n),n=Math.floor(n+Q),0===n?1!==et&&Z?.5:1:t<0?-n:n}var ot={promiseInterceptor:q},it=Object.freeze({upx2px:rt,interceptors:ot,addInterceptor:T,removeInterceptor:P}),at={},st=[],ut=[],ct=["success","fail","cancel","complete"];function ft(t,e,n){return function(r){return e(pt(t,r,n))}}function lt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(g(e)){var i=!0===o?e:{};for(var a in y(n)&&(n=n(e,i)||{}),e)if(m(n,a)){var s=n[a];y(s)&&(s=s(e[a],e,i)),s?_(s)?i[s]=e[a]:g(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ct.indexOf(a)?i[a]=ft(t,e[a],r):o||(i[a]=e[a]);return i}return y(e)&&(e=ft(t,e,r)),e}function pt(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return y(at.returnValue)&&(e=at.returnValue(t,e)),lt(t,e,n,{},r)}function ht(t,e){if(m(at,t)){var n=at[t];return n?function(e,r){var o=n;y(n)&&(o=n(e)),e=lt(t,e,o.args,o.returnValue);var i=[e];"undefined"!==typeof r&&i.push(r);var a=wx[o.name||t].apply(wx,i);return J(t)?pt(t,a,o.returnValue,z(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),vt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function yt(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};y(n)&&n(o),y(r)&&r(o)}}vt.forEach(function(t){dt[t]=yt(t)});var _t=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function gt(t,e,n){return t[e].apply(t,n)}function mt(){return gt(_t(),"$on",Array.prototype.slice.call(arguments))}function bt(){return gt(_t(),"$off",Array.prototype.slice.call(arguments))}function wt(){return gt(_t(),"$once",Array.prototype.slice.call(arguments))}function $t(){return gt(_t(),"$emit",Array.prototype.slice.call(arguments))}var kt=Object.freeze({$on:mt,$off:bt,$once:wt,$emit:$t});function At(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function Ot(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;At("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),o=t.show,i=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},u=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.hide=function(){u();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.close=function(){u(),e=[];for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a.apply(t,r)}}}function St(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&Ot(e),e}var jt=Object.freeze({getSubNVueById:St,requireNativePlugin:At}),xt=Page,Ct=Component,Dt=/:/g,Et=w(function(t){return k(t.replace(Dt,"-"))});function Tt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[Et(n)].concat(o))}}}function Pt(t,e){var n=e[t];e[t]=n?function(){Tt(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Tt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Pt("onLoad",t),xt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Pt("created",t),Ct(t)};var Bt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function It(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){m(n,e)&&(t[e]=n[e])})}function Nt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,y(e))return!!y(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(y(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Nt(t,e)}):void 0}function Rt(t,e,n){e.forEach(function(e){Nt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Ut(t,e){var n;return e=e.default||e,y(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Mt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Vt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function qt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return g(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||m(n,t)||(n[t]=r[t])}),n}var Ft=[String,Number,Boolean,Object,Array,null];function Lt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Ht(t,e){var n=t["behaviors"],r=t["extends"],o=t["mixins"],i=t["props"];i||(t["props"]=i=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]={type:String,default:""},i["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),g(r)&&r.props&&a.push(e({properties:Jt(r.props,!0)})),Array.isArray(o)&&o.forEach(function(t){g(t)&&t.props&&a.push(e({properties:Jt(t.props,!0)}))}),a}function zt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Jt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Lt(t)}}):g(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(g(r)){var o=r["default"];y(o)&&(o=o()),r.type=zt(e,r.type),n[e]={type:-1!==Ft.indexOf(r.type)?r.type:null,value:o,observer:Lt(e)}}else{var i=zt(e,r);n[e]={type:-1!==Ft.indexOf(i)?i:null,observer:Lt(e)}}}),n}function Wt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=b,t.preventDefault=b,t.target=t.target||{},m(t,"detail")||(t.detail={}),g(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Kt(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=o:i?Array.isArray(s)?n=s.find(function(e){return t.__get_value(i,e)===o}):g(s)?n=Object.keys(s).find(function(e){return t.__get_value(i,s[e])===o}):console.error("v-for 暂不支持循环数据：",s):n=s[o],a&&(n=t.__get_value(a,n))}}),n}function Gt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=Kt(t,e)}),r}function Xt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Qt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Gt(t,r,e),u=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?u.push(e.detail.__args__[0]):u.push(e):u.push(e.target.value):Array.isArray(t)&&"o"===t[0]?u.push(Xt(t)):"string"===typeof t&&m(s,t)?u.push(s[t]):u.push(t)}),u}var Yt="~",Zt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Wt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var o=t.type,i=[];return r.forEach(function(n){var r=n[0],a=n[1],s=r.charAt(0)===Zt;r=s?r.slice(1):r;var u=r.charAt(0)===Yt;r=u?r.slice(1):r,a&&te(o,r)&&a.forEach(function(n){var r=n[0];if(r){var o=e.$vm;o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent);var a=o[r];if(!y(a))throw new Error(" _vm.".concat(r," is not a function"));if(u){if(a.once)return;a.once=!0}i.push(a.apply(o,Qt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===o&&1===i.length&&"undefined"!==typeof i[0]?i[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,o=e.initRefs;t.$options.store&&(r.default.prototype.$store=t.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(o(this),It(this,n)))}});var i={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return i.globalData=t.$options.globalData||{},Rt(i,ne),i}var oe=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ie(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var o=n.length-1;o>=0;o--)if(r=ie(n[o],e),r)return r}function ae(t){return Behavior(t)}function se(){return!!this.route}function ue(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function fe(t){var e,n=t.detail||t.value,r=n.vuePid,o=n.vueOptions;r&&(e=ie(this.$vm,r)),e||(e=this.$vm),o.parent=e}function le(t){return re(t,{mocks:oe,initRefs:ce})}var pe=["onUniNViewMessage"];function he(t){var e=le(t);return Rt(e,pe),e}function de(t){return App(he(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,o=e.initRelation,a=Ut(r.default,t),s=i(a,2),u=s[0],c=s[1],f={multipleSlots:!0,addGlobalClass:!0},l={options:f,data:qt(c,r.default.prototype),behaviors:Ht(c,ae),properties:Jt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Vt(t.vueId,this),o.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new u(e),Mt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:fe,__e:ee}};return Array.isArray(c.wxsCallMethods)&&c.wxsCallMethods.forEach(function(t){l.methods[t]=function(e){return this.$vm[t](e)}}),n?l:[l,u]}function ye(t){return ve(t,{isPage:se,initRelation:ue})}function _e(t){var e=ye(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var ge=["onShow","onHide","onUnload"];function me(t,e){e.isPage,e.initRelation;var n=_e(t);return Rt(n.methods,ge,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function be(t){return me(t,{isPage:se,initRelation:ue})}ge.push.apply(ge,Bt);var we=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function $e(t){var e=be(t);return Rt(e.methods,we),e}function ke(t){return Component($e(t))}function Ae(t){return Component(_e(t))}st.forEach(function(t){at[t]=!1}),ut.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var Oe={};Object.keys(it).forEach(function(t){Oe[t]=it[t]}),Object.keys(kt).forEach(function(t){Oe[t]=kt[t]}),Object.keys(jt).forEach(function(t){Oe[t]=X(t,jt[t])}),Object.keys(wx).forEach(function(t){(m(wx,t)||m(at,t))&&(Oe[t]=X(t,ht(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Oe,t.UniEmitter=kt),wx.createApp=de,wx.createPage=ke,wx.createComponent=Ae;var Se=Oe,je=Se;e.default=je}).call(this,n("c8ba"))},7054:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={appid:"__UNI__C0C5511"};e.default=r},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-24220191115004",_inBundle:!1,_integrity:"sha512-UKnpiHSP7h9c5IFpJFkWkpm1KyWz9iHj1hchrQSUxPhChx+KPOmunnQcKGiQvvBz9CeSi7Se/eauJYha5ch0kw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-24220191115004.tgz",_shasum:"5848f2204f37daaf8c340fb27d9f76b16fcbfdeb",_spec:"@dcloudio/uni-stat@next",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"bcf65737c5111d47398695d3db8ed87305df346e",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-24220191115004"}},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function r(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?o(t):e}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var l=e.version,p="https://tongji.dcloud.io/uni/stat",h="https://tongji.dcloud.io/uni/stat.gif",d=1800,v=300,y=10,_="__DC_STAT_UUID",g="__DC_UUID_VALUE";function m(){var e="";if("n"===k()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(_)}catch(n){e=g}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(_,e)}catch(n){t.setStorageSync(_,g)}}return e}var b=function(t){var e=Object.keys(t),n=e.sort(),r={},o="";for(var i in n)r[n[i]]=t[n[i]],o+=n[i]+"="+t[n[i]]+"&";return{sign:"",options:o.substr(0,o.length-1)}},w=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},$=function(){return parseInt((new Date).getTime()/1e3)},k=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},A=function(){var e="";return"wx"!==k()&&"qq"!==k()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},O=function(){return"n"===k()?plus.runtime.version:""},S=function(){var t=k(),e="";return"n"===t&&(e=plus.runtime.channel),e},j=function(e){var n=k(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},x="First__Visit__Time",C="Last__Visit__Time",D=function(){var e=t.getStorageSync(x),n=0;return e?n=e:(n=$(),t.setStorageSync(x,n),t.removeStorageSync(C)),n},E=function(){var e=t.getStorageSync(C),n=0;return n=e||"",t.setStorageSync(C,$()),n},T="__page__residence__time",P=0,B=0,I=function(){return P=$(),"n"===k()&&t.setStorageSync(T,$()),P},N=function(){return B=$(),"n"===k()&&(P=t.getStorageSync(T)),B-P},R="Total__Visit__Count",U=function(){var e=t.getStorageSync(R),n=1;return e&&(n=e,n++),t.setStorageSync(R,n),n},M=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},V=0,q=0,F=function(){var t=(new Date).getTime();return V=t,q=0,t},L=function(){var t=(new Date).getTime();return q=t,t},H=function(t){var e=0;if(0!==V&&(e=q-V),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>v;return{residenceTime:e,overtime:n}}if("page"===t){var r=e>d;return{residenceTime:e,overtime:r}}return{residenceTime:e}},z=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===k()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},J=function(t){var e=getCurrentPages(),n=e[e.length-1],r=n.$vm,o=t._query,i=o&&"{}"!==JSON.stringify(o)?"?"+JSON.stringify(o):"";return t._query="","bd"===k()?r.$mp&&r.$mp.page.is+i:r.$scope&&r.$scope.route+i||r.$mp&&r.$mp.page.route+i},W=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},K=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},G=n("6aa7").default,X=n("7054").default||n("7054"),Q=t.getSystemInfoSync(),Y=function(){function e(){u(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:k(),mpn:A(),ak:X.appid,usv:l,v:O(),ch:S(),cn:"",pn:"",ct:"",t:$(),tt:"",p:"android"===Q.platform?"a":"i",brand:Q.brand||"",md:Q.model,sv:Q.system.replace(/(Android|iOS)\s/,""),mpsdk:Q.SDKVersion||"",mpv:Q.version||"",lang:Q.language,pr:Q.pixelRatio,ww:Q.windowWidth,wh:Q.windowHeight,sw:Q.screenWidth,sh:Q.screenHeight}}return f(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){L();var t=H("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,L();var n=H();F();var r=J(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=J(this),e=z();if(this._navigationBarTitle.config=G&&G.pages[e]&&G.pages[e].titleNView&&G.pages[e].titleNView.titleText||G&&G.pages[e]&&G.pages[e].navigationBarTitleText||"",this.__licationShow)return F(),this.__licationShow=!1,void(this._lastPageRoute=t);L(),this._lastPageRoute=t;var n=H("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}F()}},{key:"_pageHide",value:function(){if(!this.__licationHide){L();var t=H("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=$(),this.statData.sc=j(t.scene),this.statData.fvts=D(),this.statData.lvts=E(),this.statData.tvc=U(),"n"===k()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(o)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,r=t.urlref_ts,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(o,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,r=t.value,o=void 0===r?"":r,i=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:i,ch:this.statData.ch,e_n:n,e_v:"object"===typeof o?JSON.stringify(o):o.toString(),usv:this.statData.usv,t:$(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;X.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,o=$(),i=this._navigationBarTitle;e.ttn=i.page,e.ttpj=i.config,e.ttc=i.report;var a=this._reportingRequestData;if("n"===k()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===k()&&t.setStorageSync("__UNI__STAT__DATA",a),!(N()<y)||n){var s=this._reportingRequestData;"n"===k()&&(s=t.getStorageSync("__UNI__STAT__DATA")),I();var u=[],c=[],f=[],p=function(t){var e=s[t];e.forEach(function(e){var n=w(e);0===t?u.push(n):3===t?f.push(n):c.push(n)})};for(var h in s)p(h);u.push.apply(u,c.concat(f));var d={usv:l,t:o,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===k()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==k()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){r._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:p,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=b(M(t)).options;e.src=h+"?"+n}},{key:"sendEvent",value:function(t,e){K(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Z=function(e){function n(){var e;return u(this,n),e=r(this,i(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(n,e),f(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),f(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,I(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,W(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,W(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(n)}}]),n}(Y),tt=Z.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function rt(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}rt()}).call(this,n("6e42")["default"])},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},d058:function(t,e,n){},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var o=t[r];"."===o?t.splice(r,1):".."===o?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return r.exec(t).slice(1)};function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var a=o>=0?arguments[o]:t.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,r="/"===a.charAt(0))}return e=n(i(e.split("/"),function(t){return!!t}),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===a(t,-1);return t=n(i(t.split("/"),function(t){return!!t}),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var o=r(t.split("/")),i=r(n.split("/")),a=Math.min(o.length,i.length),s=a,u=0;u<a;u++)if(o[u]!==i[u]){s=u;break}var c=[];for(u=s;u<o.length;u++)c.push("..");return c=c.concat(i.slice(s)),c.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=o(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},e.basename=function(t,e){var n=o(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){return o(t)[3]};var a="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/uni-countdown/uni-countdown';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-countdown/uni-countdown.js';

define('components/uni-countdown/uni-countdown.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-countdown/uni-countdown"], {
  "14d1": function d1(t, e, n) {},
  "1e31": function e31(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var o = {
      name: "uni-countdown",
      props: {
        showDay: {
          type: Boolean,
          default: !0
        },
        showColon: {
          type: Boolean,
          default: !0
        },
        backgroundColor: {
          type: String,
          default: "#FFFFFF"
        },
        borderColor: {
          type: String,
          default: "#000000"
        },
        color: {
          type: String,
          value: "#000000"
        },
        splitorColor: {
          type: String,
          default: "#000000"
        },
        day: {
          type: Number,
          default: 0
        },
        hour: {
          type: Number,
          default: 0
        },
        minute: {
          type: Number,
          default: 0
        },
        second: {
          type: Number,
          default: 0
        }
      },
      data: function data() {
        return {
          timer: null,
          d: "00",
          h: "00",
          i: "00",
          s: "00",
          leftTime: 0,
          seconds: 0
        };
      },
      created: function created(t) {
        var e = this;
        this.seconds = this.toSeconds(this.day, this.hour, this.minute, this.second), this.countDown(), this.timer = setInterval(function () {
          e.seconds--, e.seconds < 0 ? e.timeUp() : e.countDown();
        }, 1e3);
      },
      beforeDestroy: function beforeDestroy() {
        clearInterval(this.timer);
      },
      methods: {
        toSeconds: function toSeconds(t, e, n, o) {
          return 60 * t * 60 * 24 + 60 * e * 60 + 60 * n + o;
        },
        timeUp: function timeUp() {
          clearInterval(this.timer), this.$emit("timeup");
        },
        countDown: function countDown() {
          var t = this.seconds,
              e = 0,
              n = 0,
              o = 0,
              u = 0;
          t > 0 ? (e = Math.floor(t / 86400), n = Math.floor(t / 3600) - 24 * e, o = Math.floor(t / 60) - 24 * e * 60 - 60 * n, u = Math.floor(t) - 24 * e * 60 * 60 - 60 * n * 60 - 60 * o) : this.timeUp(), e < 10 && (e = "0" + e), n < 10 && (n = "0" + n), o < 10 && (o = "0" + o), u < 10 && (u = "0" + u), this.d = e, this.h = n, this.i = o, this.s = u;
        }
      }
    };
    e.default = o;
  },
  2858: function _(t, e, n) {
    "use strict";

    var o = function o() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    n.d(e, "a", function () {
      return o;
    }), n.d(e, "b", function () {
      return u;
    });
  },
  "5d79": function d79(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("2858"),
        u = n("f484");

    for (var r in u) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(r);
    }

    n("dc73");
    var i = n("2877"),
        s = Object(i["a"])(u["default"], o["a"], o["b"], !1, null, null, null);
    e["default"] = s.exports;
  },
  dc73: function dc73(t, e, n) {
    "use strict";

    var o = n("14d1"),
        u = n.n(o);
    u.a;
  },
  f484: function f484(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("1e31"),
        u = n.n(o);

    for (var r in o) {
      "default" !== r && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(r);
    }

    e["default"] = u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-countdown/uni-countdown-create-component', {
  'components/uni-countdown/uni-countdown-create-component': function componentsUniCountdownUniCountdownCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5d79"));
  }
}, [['components/uni-countdown/uni-countdown-create-component']]]);
});
require('components/uni-countdown/uni-countdown.js');
__wxRoute = 'components/uni-icons/uni-icons';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-icons/uni-icons.js';

define('components/uni-icons/uni-icons.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-icons/uni-icons"], {
  "548c": function c(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "UniIcons",
      props: {
        type: {
          type: String,
          default: ""
        },
        color: {
          type: String,
          default: "#333333"
        },
        size: {
          type: [Number, String],
          default: 16
        }
      },
      methods: {
        _onClick: function _onClick() {
          this.$emit("click");
        }
      }
    };
    t.default = u;
  },
  "9b8a": function b8a(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("548c"),
        c = e.n(u);

    for (var i in u) {
      "default" !== i && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(i);
    }

    t["default"] = c.a;
  },
  c36e: function c36e(n, t, e) {},
  ce6a: function ce6a(n, t, e) {
    "use strict";

    var u = e("c36e"),
        c = e.n(u);
    c.a;
  },
  d5e8: function d5e8(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        c = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return c;
    });
  },
  f262: function f262(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("d5e8"),
        c = e("9b8a");

    for (var i in c) {
      "default" !== i && function (n) {
        e.d(t, n, function () {
          return c[n];
        });
      }(i);
    }

    e("ce6a");
    var r = e("2877"),
        a = Object(r["a"])(c["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = a.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-icons/uni-icons-create-component', {
  'components/uni-icons/uni-icons-create-component': function componentsUniIconsUniIconsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("f262"));
  }
}, [['components/uni-icons/uni-icons-create-component']]]);
});
require('components/uni-icons/uni-icons.js');
__wxRoute = 'components/uni-notice-bar/uni-notice-bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-notice-bar/uni-notice-bar.js';

define('components/uni-notice-bar/uni-notice-bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-notice-bar/uni-notice-bar"], {
  "2e09": function e09(t, e, n) {},
  "4a3b": function a3b(t, e, n) {
    "use strict";

    var i = function i() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        o = [];

    n.d(e, "a", function () {
      return i;
    }), n.d(e, "b", function () {
      return o;
    });
  },
  5121: function _(t, e, n) {
    "use strict";

    var i = n("2e09"),
        o = n.n(i);
    o.a;
  },
  "5b5c": function b5c(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("4a3b"),
        o = n("6411");

    for (var c in o) {
      "default" !== c && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(c);
    }

    n("5121");
    var a = n("2877"),
        u = Object(a["a"])(o["default"], i["a"], i["b"], !1, null, null, null);
    e["default"] = u.exports;
  },
  6411: function _(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("cb8c"),
        o = n.n(i);

    for (var c in i) {
      "default" !== c && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(c);
    }

    e["default"] = o.a;
  },
  cb8c: function cb8c(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;

      var i = function i() {
        return n.e("components/uni-icons/uni-icons").then(n.bind(null, "f262"));
      },
          o = {
        name: "UniNoticeBar",
        components: {
          uniIcons: i
        },
        props: {
          text: {
            type: String,
            default: ""
          },
          moreText: {
            type: String,
            default: ""
          },
          backgroundColor: {
            type: String,
            default: "#fffbe8"
          },
          speed: {
            type: [String, Number],
            default: 100
          },
          color: {
            type: String,
            default: "#de8c17"
          },
          single: {
            type: [String, Boolean],
            default: !1
          },
          scrollable: {
            type: [String, Boolean],
            default: !1
          },
          showIcon: {
            type: [String, Boolean],
            default: !1
          },
          showGetMore: {
            type: [String, Boolean],
            default: !1
          },
          showClose: {
            type: [String, Boolean],
            default: !1
          }
        },
        data: function data() {
          var t = "Uni_".concat(Math.ceil(1e6 * Math.random()).toString(36));
          return {
            elId: t,
            show: !0,
            animation: ""
          };
        },
        watch: {
          text: function text(t, e) {
            var n = this;
            this.$nextTick(function () {
              setTimeout(n.setAnimation, 200);
            });
          }
        },
        onReady: function onReady() {
          this.setAnimation();
        },
        methods: {
          clickMore: function clickMore() {
            this.$emit("getmore");
          },
          onClick: function onClick(e) {
            var n = e.touches ? e.touches[0] ? e.touches[0].clientX : e.changedTouches[0].clientX : e.detail.clientX;
            t.upx2px(48) + 12 > n && "true" === String(this.showClose) && (this.show = !1, this.$emit("close")), this.$emit("click");
          },
          setAnimation: function setAnimation() {
            var e = this;
            !1 !== this.scrollable && "false" !== this.scrollable && t.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function (t) {
              e.animation = "notice ".concat(t[0].width / e.speed, "s linear infinite both");
            });
          }
        }
      };

      e.default = o;
    }).call(this, n("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-notice-bar/uni-notice-bar-create-component', {
  'components/uni-notice-bar/uni-notice-bar-create-component': function componentsUniNoticeBarUniNoticeBarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5b5c"));
  }
}, [['components/uni-notice-bar/uni-notice-bar-create-component']]]);
});
require('components/uni-notice-bar/uni-notice-bar.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{1558:function(t,e,n){"use strict";(function(t){n("d058"),n("921b");o(n("66fd"));var e=o(n("79a4"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"2dae":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.userInfo.bank_card.replace(/(\d{4})(?=\d)/g,"$1 "));t.$mp.data=Object.assign({},{$root:{g0:n}})},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},5557:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return n.e("components/uni-notice-bar/uni-notice-bar").then(n.bind(null,"5b5c"))},a={components:{uniNoticeBar:o},data:function(){return{userInfo:{},message_text:"",deposit_amount:0,deposit:0,withdraw_amount:0,index_amount:0,deposit_enough_message:""}},onShow:function(){this.getUserInfo()},onPullDownRefresh:function(){this.getUserInfo(),setTimeout(function(){t.stopPullDownRefresh()},100)},methods:{getUserInfo:function(){var e=this,n=this.getGlobalAccessToken();null!=n&&t.request({url:this.serverUrl+"user-info",header:{Authorization:n,Accept:"application/json"},method:"GET",success:function(n){if(200==n.data.code)e.userInfo=n.data.data,e.message_text=n.data.data.message,e.userInfo.bank_card&&e.userInfo.bank_name&&e.userInfo.name||t.showModal({title:"完善个人信息",content:"请完善银行信息",showCancel:!1,success:function(e){e.confirm&&t.navigateTo({url:"../my/myInfo"})}});else{if(429!=n.data.code)return t.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!1,success:function(e){e.confirm&&t.reLaunch({url:"../registLogin/registLogin"})}}),null;t.showToast({title:n.data.message,image:"../../static/icons/warning.png"})}}}),t.request({url:this.serverUrl+"deposit-count",header:{Authorization:n,Accept:"application/json"},method:"GET",success:function(t){200==t.data.code&&(e.deposit_amount=t.data.data.deposit_amount,e.deposit_enough_message=t.data.data.deposit_enough_message,e.deposit=t.data.data.deposit,e.withdraw_amount=t.data.data.withdraw_amount,e.index_amount=t.data.data.index_amount)}})},submitDeposit:function(){this.deposit_amount>=this.deposit?t.showModal({title:"保证金",content:this.deposit_enough_message,showCancel:!1,confirmText:"确定"}):t.navigateTo({url:"../my/deposit"})},grabOrder:function(){var e=this.getGlobalAccessToken();t.request({url:this.serverUrl+"grab-order",header:{Authorization:e,Accept:"application/json"},method:"GET",success:function(e){200==e.data.code?t.showModal({title:"抢单成功",content:e.data.message,showCancel:!1,confirmText:"确定",success:function(e){e.confirm&&t.switchTab({url:"../my/grab"})}}):422==e.data.code&&t.showModal({title:"抢单失败",content:e.data.message,showCancel:!1,confirmText:"确定"})}})},contacts:function(e){t.showModal({title:"联系人",content:"联系人请从客户管理进入",showCancel:!1,confirmText:"确定"})},contractManagement:function(e){t.showModal({title:"合同管理",content:"测试版，需根据具体情况录入模板",showCancel:!1,confirmText:"确定"})},paymentManagement:function(e){t.showModal({title:"回款管理",content:"测试版，需根据具体情况录入模板",showCancel:!1,confirmText:"确定"})}}};e.default=a}).call(this,n("6e42")["default"])},"57d7":function(t,e,n){"use strict";n.r(e);var o=n("5557"),a=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=a.a},"79a4":function(t,e,n){"use strict";n.r(e);var o=n("2dae"),a=n("57d7");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("bce7");var i=n("2877"),c=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports},bce7:function(t,e,n){"use strict";var o=n("c3c5"),a=n.n(o);a.a},c3c5:function(t,e,n){}},[["1558","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/registLogin/registLogin';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/registLogin/registLogin.js';

define('pages/registLogin/registLogin.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/registLogin/registLogin"],{"1f63":function(t,e,a){},"335b":function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{captcha_img:"",code:"",key:"",username:"",password:""}},onLoad:function(){this.captcha()},methods:{captcha:function(){var e=this,a=this.serverUrl;t.request({url:a+"captcha",method:"GET",success:function(t){e.captcha_img=t.data.data.img,e.key=t.data.data.key}})},formSubmit:function(){var e=this,n=this,i=n.serverUrl;t.request({url:i+"login",data:{username:n.username,code:n.code,password:n.password,key:n.key},method:"POST",success:function(n){console.log(a(n," at pages/registLogin/registLogin.vue:82")),200==n.data.code?(t.setStorageSync("globalAccessToken",{auth_id:n.data.data.auth_id,expires_in:n.data.data.expires_in,token:n.data.data.token,expires_at:Math.round(new Date/1e3)+n.data.data.expires_in}),t.switchTab({url:"../index/index"})):422==n.data.code&&(e.captcha(),t.showToast({title:n.data.message,image:"../../static/icons/warning.png"}))}})}}};e.default=n}).call(this,a("6e42")["default"],a("0de9")["default"])},"4e11":function(t,e,a){"use strict";a.r(e);var n=a("335b"),i=a.n(n);for(var c in n)"default"!==c&&function(t){a.d(e,t,function(){return n[t]})}(c);e["default"]=i.a},b6ed:function(t,e,a){"use strict";a.r(e);var n=a("bc28"),i=a("4e11");for(var c in i)"default"!==c&&function(t){a.d(e,t,function(){return i[t]})}(c);a("d992");var o=a("2877"),r=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},bc28:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},bf61:function(t,e,a){"use strict";(function(t){a("d058"),a("921b");n(a("66fd"));var e=n(a("b6ed"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},d992:function(t,e,a){"use strict";var n=a("1f63"),i=a.n(n);i.a}},[["bf61","common/runtime","common/vendor"]]]);
});
require('pages/registLogin/registLogin.js');
__wxRoute = 'pages/registLogin/regist';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/registLogin/regist.js';

define('pages/registLogin/regist.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/registLogin/regist"],{"053d":function(t,e,a){"use strict";a.r(e);var n=a("fd27"),i=a.n(n);for(var c in n)"default"!==c&&function(t){a.d(e,t,function(){return n[t]})}(c);e["default"]=i.a},2125:function(t,e,a){"use strict";a.r(e);var n=a("6536"),i=a("053d");for(var c in i)"default"!==c&&function(t){a.d(e,t,function(){return i[t]})}(c);a("98bc");var o=a("2877"),s=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},"3e52":function(t,e,a){"use strict";(function(t){a("d058"),a("921b");n(a("66fd"));var e=n(a("2125"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},6536:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"7c2a":function(t,e,a){},"98bc":function(t,e,a){"use strict";var n=a("7c2a"),i=a.n(n);i.a},fd27:function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{captcha_img:"",code:"",key:"",username:"",password:"",invitation_code:""}},onLoad:function(){this.captcha()},methods:{captcha:function(){var e=this,a=this.serverUrl;t.request({url:a+"captcha",method:"GET",success:function(t){e.captcha_img=t.data.data.img,e.key=t.data.data.key}})},formSubmit:function(){var e=this,n=this,i=n.serverUrl;t.request({url:i+"register",data:{username:n.username,code:n.code,invitation_code:n.invitation_code,password:n.password,key:n.key},method:"POST",success:function(n){console.log(a(n," at pages/registLogin/regist.vue:93")),200==n.data.code?(t.showToast({title:n.data.message,image:"../../static/icons/success.png"}),setTimeout(function(){t.navigateTo({url:"../registLogin/registLogin"})},1e3)):422==n.data.code&&(e.captcha(),t.showToast({title:n.data.message,image:"../../static/icons/warning.png"}))}})}}};e.default=n}).call(this,a("6e42")["default"],a("0de9")["default"])}},[["3e52","common/runtime","common/vendor"]]]);
});
require('pages/registLogin/regist.js');
__wxRoute = 'pages/my/my';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/my.js';

define('pages/my/my.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{"0687":function(t,e,n){"use strict";n.r(e);var o=n("5faf"),a=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=a.a},1959:function(t,e,n){"use strict";n.r(e);var o=n("8903"),a=n("0687");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("6432");var c=n("2877"),u=Object(c["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},2658:function(t,e,n){},"5faf":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{userInfo:{},message:0}},onShow:function(){var e=this,n=this.getGlobalAccessToken();t.request({url:this.serverUrl+"message-count",header:{Authorization:n,Accept:"application/json"},method:"GET",success:function(t){e.message=t.data.data}})},onLoad:function(){var e=this,n=this.getGlobalAccessToken();null!=n&&t.request({url:this.serverUrl+"user-info",header:{Authorization:n,Accept:"application/json"},method:"GET",success:function(n){200==n.data.code?e.userInfo=n.data.data:429==n.data.code?t.showToast({title:n.data.message,image:"../../static/icons/warning.png"}):t.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!1,success:function(e){e.confirm&&t.reLaunch({url:"../registLogin/registLogin"})}})}})},methods:{exit:function(){var e=this;t.showModal({title:"注销",content:"确定退出登录",showCancel:!0,success:function(n){n.confirm&&(e.removeGlobalAccessToken(),t.reLaunch({url:"../registLogin/registLogin"}))}})},copy:function(e){t.setClipboardData({data:e,success:function(){console.log(n("success"," at pages/my/my.vue:191"))}})},toMessage:function(){t.navigateTo({url:"../my/myMessage"})}}};e.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])},6432:function(t,e,n){"use strict";var o=n("2658"),a=n.n(o);a.a},8021:function(t,e,n){"use strict";(function(t){n("d058"),n("921b");o(n("66fd"));var e=o(n("1959"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},8903:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})}},[["8021","common/runtime","common/vendor"]]]);
});
require('pages/my/my.js');
__wxRoute = 'pages/my/grab';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/grab.js';

define('pages/my/grab.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/grab"],{"084d":function(t,e,a){"use strict";a.r(e);var n=a("bb45"),i=a("df0f");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("f79a");var s=a("2877"),c=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},"08e2":function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return a.e("components/uni-countdown/uni-countdown").then(a.bind(null,"5d79"))},o={components:{uniCountDown:i},data:function(){return{grab:[],images:[],time_up:!1,remitter:"",image_uploading:!1}},onShow:function(){this.getGrab()},methods:{timeup:function(){this.time_up=!0,t.showToast({title:"已自动取消",image:"../../static/icons/warning.png"}),console.log(n("时间到"," at pages/my/grab.vue:104"))},copy:function(e){t.setClipboardData({data:e,success:function(){console.log(n("success"," at pages/my/grab.vue:111"))}})},getGrab:function(){var e=this,a=this.getGlobalAccessToken();null!=a&&t.request({url:this.serverUrl+"grab",header:{Authorization:a,Accept:"application/json"},method:"GET",success:function(a){200==a.data.code?e.grab=a.data.data:422==a.data.code?t.showModal({title:"等待对方确认",content:a.data.message,showCancel:!0,success:function(e){e.confirm&&t.navigateTo({url:"../my/myTransaction"})}}):429==a.data.code?t.showToast({title:a.data.message,image:"../../static/icons/warning.png"}):t.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!1,success:function(e){e.confirm&&t.reLaunch({url:"../registLogin/registLogin"})}})}})},removeImage:function(e){var a=this;t.showModal({title:"删除",content:"确定删除图片？",showCancel:!0,confirmText:"确定",success:function(t){t.confirm?a.images.splice(e,1):t.cancel&&console.log(n("用户点击取消"," at pages/my/grab.vue:178"))}})},uploadImage:function(){var e=this;this.time_up?t.showToast({title:"已自动取消",image:"../../static/icons/warning.png"}):t.chooseImage({success:function(a){var i=a.tempFilePaths,o=e.getGlobalAccessToken();e.image_uploading=!0,t.showLoading({title:"图片上传中"}),t.uploadFile({url:e.serverUrl+"upload",filePath:i[0],name:"file",header:{Authorization:o,Accept:"application/json"},formData:{type:"1"},success:function(a){var i=JSON.parse(a.data);console.log(n(i.data," at pages/my/grab.vue:213")),e.images.push(i.data),setTimeout(function(){t.hideLoading()},500),e.image_uploading=!1}})}})},submit:function(){var e=this;if(this.image_uploading)t.showToast({title:"图片未上传完成",image:"../../static/icons/success.png"});else if(this.time_up)t.showToast({title:"已自动取消",image:"../../static/icons/warning.png"});else{var a=this.getGlobalAccessToken(),n=this,i=n.serverUrl;t.request({url:i+"save-grab",header:{Authorization:a,Accept:"application/json"},data:{id:n.grab.id,remitter:n.remitter,images:n.images},method:"POST",success:function(a){200==a.data.code?(e.images=[],e.grab=[],t.showToast({title:a.data.message,image:"../../static/icons/success.png"}),setTimeout(function(){t.navigateTo({url:"../my/myTransaction"})},1e3)):422==a.data.code&&t.showToast({title:a.data.message,image:"../../static/icons/warning.png"})}})}}}};e.default=o}).call(this,a("6e42")["default"],a("0de9")["default"])},"2f27":function(t,e,a){},a157:function(t,e,a){"use strict";(function(t){a("d058"),a("921b");n(a("66fd"));var e=n(a("084d"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},bb45:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=(t._self._c,t.grab.time_out_at.substr(0,10));t.$mp.data=Object.assign({},{$root:{g0:a}})},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},df0f:function(t,e,a){"use strict";a.r(e);var n=a("08e2"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},f79a:function(t,e,a){"use strict";var n=a("2f27"),i=a.n(n);i.a}},[["a157","common/runtime","common/vendor"]]]);
});
require('pages/my/grab.js');
__wxRoute = 'pages/my/myInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/myInfo.js';

define('pages/my/myInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/myInfo"],{"02b5":function(a,t,e){"use strict";(function(a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{username:"",name:"",invitation_code:"",bankname:"",bankcard:"",password:"",index:0,bankname_list:[]}},onLoad:function(){var t=this,e=this.getGlobalAccessToken();null!=e&&a.request({url:this.serverUrl+"user-info",header:{Authorization:e,Accept:"application/json"},method:"GET",success:function(e){200==e.data.code?(t.bankname_list=e.data.data.bankname_list,t.username=e.data.data.username,t.name=e.data.data.name?e.data.data.name:"",t.invitation_code=e.data.data.invitation_code,t.bankcard=e.data.data.bank_card?e.data.data.bank_card:"",t.bankname=e.data.data.bank_name?e.data.data.bank_name:"",t.findIndex()):429==e.data.code?a.showToast({title:e.data.message,image:"../../static/icons/warning.png"}):a.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!1,success:function(t){t.confirm&&a.reLaunch({url:"../registLogin/registLogin"})}})}})},methods:{banknameSelect:function(a){this.index=a.detail.value},findIndex:function(){var a=this;this.bankname_list.forEach(function(t,e){a.bankname==t&&(a.index=e)})},updateName:function(){var t=this.getGlobalAccessToken(),e=this,n=e.serverUrl;a.request({url:n+"update-name",header:{Authorization:t,Accept:"application/json"},data:{name:e.name},method:"POST",success:function(t){200==t.data.code?a.showToast({title:t.data.message,image:"../../static/icons/success.png"}):422==t.data.code&&a.showToast({title:t.data.message,image:"../../static/icons/warning.png"})}})},updatePassword:function(){var t=this,e=this.getGlobalAccessToken(),n=this,s=n.serverUrl;a.request({url:s+"update-password",header:{Authorization:e,Accept:"application/json"},data:{password:n.password},method:"POST",success:function(e){200==e.data.code?(t.password="",a.showToast({title:e.data.message,image:"../../static/icons/success.png"})):422==e.data.code&&a.showToast({title:e.data.message,image:"../../static/icons/warning.png"})}})},updateBankname:function(){var t=this.getGlobalAccessToken(),e=this,n=e.serverUrl;a.request({url:n+"update-bankname",header:{Authorization:t,Accept:"application/json"},data:{bankname:this.bankname_list[this.index]},method:"POST",success:function(t){200==t.data.code?a.showToast({title:t.data.message,image:"../../static/icons/success.png"}):422==t.data.code&&a.showToast({title:t.data.message,image:"../../static/icons/warning.png"})}})},updateBankcard:function(){var t=this.getGlobalAccessToken(),e=this,n=e.serverUrl;a.request({url:n+"update-bankcard",header:{Authorization:t,Accept:"application/json"},data:{bankcard:e.bankcard},method:"POST",success:function(t){200==t.data.code?a.showToast({title:t.data.message,image:"../../static/icons/success.png"}):422==t.data.code&&a.showToast({title:t.data.message,image:"../../static/icons/warning.png"})}})}}};t.default=e}).call(this,e("6e42")["default"])},"3f7c":function(a,t,e){},"4f7a":function(a,t,e){"use strict";e.r(t);var n=e("02b5"),s=e.n(n);for(var i in n)"default"!==i&&function(a){e.d(t,a,function(){return n[a]})}(i);t["default"]=s.a},"5d4d":function(a,t,e){"use strict";var n=function(){var a=this,t=a.$createElement;a._self._c},s=[];e.d(t,"a",function(){return n}),e.d(t,"b",function(){return s})},b1e7:function(a,t,e){"use strict";(function(a){e("d058"),e("921b");n(e("66fd"));var t=n(e("d9ca"));function n(a){return a&&a.__esModule?a:{default:a}}a(t.default)}).call(this,e("6e42")["createPage"])},d9ca:function(a,t,e){"use strict";e.r(t);var n=e("5d4d"),s=e("4f7a");for(var i in s)"default"!==i&&function(a){e.d(t,a,function(){return s[a]})}(i);e("f7c7");var c=e("2877"),o=Object(c["a"])(s["default"],n["a"],n["b"],!1,null,null,null);t["default"]=o.exports},f7c7:function(a,t,e){"use strict";var n=e("3f7c"),s=e.n(n);s.a}},[["b1e7","common/runtime","common/vendor"]]]);
});
require('pages/my/myInfo.js');
__wxRoute = 'pages/my/withdraw';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/withdraw.js';

define('pages/my/withdraw.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/withdraw"],{"0023":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=(t._self._c,t.bankcard.substr(t.bankcard.length-4,4));t.$mp.data=Object.assign({},{$root:{g0:e}})},o=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return o})},"6bda":function(t,a,e){"use strict";(function(t){e("d058"),e("921b");n(e("66fd"));var a=n(e("d206"));function n(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("6e42")["createPage"])},9758:function(t,a,e){"use strict";e.r(a);var n=e("d841"),o=e.n(n);for(var i in n)"default"!==i&&function(t){e.d(a,t,function(){return n[t]})}(i);a["default"]=o.a},cad0:function(t,a,e){},cc32:function(t,a,e){"use strict";var n=e("cad0"),o=e.n(n);o.a},d206:function(t,a,e){"use strict";e.r(a);var n=e("0023"),o=e("9758");for(var i in o)"default"!==i&&function(t){e.d(a,t,function(){return o[t]})}(i);e("cc32");var c=e("2877"),r=Object(c["a"])(o["default"],n["a"],n["b"],!1,null,null,null);a["default"]=r.exports},d841:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{withdraw_amount:"",amount:"",bankcard:"",bankname:"",operationFee:"",fee:0}},onLoad:function(){var a=this,e=this.getGlobalAccessToken();null!=e&&t.request({url:this.serverUrl+"user-info",header:{Authorization:e,Accept:"application/json"},method:"GET",success:function(e){200==e.data.code?(a.amount=e.data.data.amount,a.bankcard=e.data.data.bank_card,a.bankname=e.data.data.bank_name,a.operationFee=e.data.data.admin_operation_fee,a.getOperationFee()):429==e.data.code?t.showToast({title:e.data.message,image:"../../static/icons/warning.png"}):t.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!1,success:function(a){a.confirm&&t.reLaunch({url:"../registLogin/registLogin"})}})}})},watch:{withdraw_amount:{handler:function(){this.getOperationFee()}}},methods:{getOperationFee:function(){this.fee=(this.operationFee/100*this.withdraw_amount).toFixed(2)},submit:function(){var a=this,e=this.getGlobalAccessToken(),n=this,o=n.serverUrl;t.request({url:o+"withdraw",header:{Authorization:e,Accept:"application/json"},data:{withdraw_amount:n.withdraw_amount},method:"POST",success:function(e){200==e.data.code?(a.withdraw_amount="",a.amount=e.data.data,t.showToast({title:e.data.message,image:"../../static/icons/success.png"}),setTimeout(function(){t.navigateTo({url:"../my/myWithdraw"})},1e3)):422==e.data.code&&t.showModal({title:"提现失败",content:e.data.message,showCancel:!1,confirmText:"确定"})}})}}};a.default=e}).call(this,e("6e42")["default"])}},[["6bda","common/runtime","common/vendor"]]]);
});
require('pages/my/withdraw.js');
__wxRoute = 'pages/my/depositWithdraw';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/depositWithdraw.js';

define('pages/my/depositWithdraw.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/depositWithdraw"],{"8d0b":function(e,t,a){},"8d89":function(e,t,a){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{user:[],show:!1}},onLoad:function(){var t=this,a=this.getGlobalAccessToken();null!=a&&e.request({url:this.serverUrl+"deposit-withdraw",header:{Authorization:a,Accept:"application/json"},method:"GET",success:function(a){200==a.data.code?(t.show=!0,t.user=a.data.data):429==a.data.code?e.showToast({title:a.data.message,image:"../../static/icons/warning.png"}):422==a.data.code?e.showModal({title:"无法提现",content:a.data.message,showCancel:!1,success:function(t){t.confirm&&e.navigateBack()}}):e.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!1,success:function(t){t.confirm&&e.reLaunch({url:"../registLogin/registLogin"})}})}})},methods:{submit:function(){var t=this;e.showModal({title:"确定提现",content:this.user.modal_message?this.user.modal_message:"确定提现",showCancel:!0,confirmText:"确定",success:function(n){if(n.confirm){var o=t.getGlobalAccessToken(),s=t,c=s.serverUrl;e.request({url:c+"save-deposit-withdraw",header:{Authorization:o,Accept:"application/json"},method:"POST",success:function(t){200==t.data.code?e.showModal({title:"提现成功",content:t.data.message,showCancel:!1,success:function(t){t.confirm&&(e.removeStorageSync("globalAccessToken"),e.reLaunch({url:"../registLogin/registLogin"}))}}):422==t.data.code&&e.showModal({title:"提现失败",content:t.data.message,showCancel:!1,confirmText:"确定"})}})}else n.cancel&&console.log(a("用户点击取消"," at pages/my/depositWithdraw.vue:147"))}})}}};t.default=n}).call(this,a("6e42")["default"],a("0de9")["default"])},a919:function(e,t,a){"use strict";a.r(t);var n=a("8d89"),o=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);t["default"]=o.a},a922:function(e,t,a){"use strict";var n=a("8d0b"),o=a.n(n);o.a},cff9:function(e,t,a){"use strict";(function(e){a("d058"),a("921b");n(a("66fd"));var t=n(a("fe34"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},d67e:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=(e._self._c,e.user.bank_card.substr(e.user.bank_card.length-4,4));e.$mp.data=Object.assign({},{$root:{g0:a}})},o=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})},fe34:function(e,t,a){"use strict";a.r(t);var n=a("d67e"),o=a("a919");for(var s in o)"default"!==s&&function(e){a.d(t,e,function(){return o[e]})}(s);a("a922");var c=a("2877"),i=Object(c["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=i.exports}},[["cff9","common/runtime","common/vendor"]]]);
});
require('pages/my/depositWithdraw.js');
__wxRoute = 'pages/my/complaint';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/complaint.js';

define('pages/my/complaint.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/complaint"],{1450:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{id:"",order_no:"",status:"",withdraw_amount:"",bankcard:"",operation_fee:"",brokerage_fee:"",content:"",type:"",message:""}},onLoad:function(t){this.type=t.type,this.id=t.id,this.order_no=t.order_no,this.status=t.status,this.withdraw_amount=t.withdraw_amount,this.bankcard=t.bankcard,this.brokerage_fee=t.brokerage_fee,this.operation_fee=t.operation_fee,this.getMessage()},methods:{getStatus:function(t){if(1==this.type){if(1==t)return"等待您出款";if(2==t)return"等待对方确认";if(3==t)return"交易完成";if(4==t)return"交易取消"}else{if(0==t)return"等待接单";if(1==t)return"等待对方出款";if(2==t)return"对方已出款";if(3==t)return"交易完成";if(4==t)return"交易取消"}},getMessage:function(){var e=this,n=this.getGlobalAccessToken(),a=this,o=a.serverUrl;t.request({url:o+"complaint-message",header:{Authorization:n,Accept:"application/json"},method:"GET",success:function(t){e.message=t.data.data}})},submit:function(){var e=this;t.showModal({title:"确定要投诉",content:this.message,showCancel:!0,confirmText:"确定",success:function(a){if(a.confirm){var o=e.getGlobalAccessToken(),i=e,s=i.serverUrl;t.request({url:s+"complaint",header:{Authorization:o,Accept:"application/json"},data:{id:i.id,content:i.content},method:"POST",success:function(e){200==e.data.code?(t.showToast({title:e.data.message,image:"../../static/icons/success.png"}),setTimeout(function(){t.navigateBack()},1e3)):422==e.data.code&&t.showModal({title:"投诉失败",content:e.data.message,showCancel:!1})}})}else a.cancel&&console.log(n("用户点击取消"," at pages/my/complaint.vue:191"))}})},back:function(e){t.navigateBack()}}};e.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},"29f0":function(t,e,n){},"315c":function(t,e,n){"use strict";(function(t){n("d058"),n("921b");a(n("66fd"));var e=a(n("b277"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"7f84":function(t,e,n){"use strict";n.r(e);var a=n("1450"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},b277:function(t,e,n){"use strict";n.r(e);var a=n("bb56"),o=n("7f84");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("cf58");var s=n("2877"),r=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},bb56:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.getStatus(t.status));t.$mp.data=Object.assign({},{$root:{m0:n}})},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},cf58:function(t,e,n){"use strict";var a=n("29f0"),o=n.n(a);o.a}},[["315c","common/runtime","common/vendor"]]]);
});
require('pages/my/complaint.js');
__wxRoute = 'pages/my/myComplaint';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/myComplaint.js';

define('pages/my/myComplaint.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/myComplaint"],{"21ca":function(t,n,e){"use strict";e.r(n);var a=e("f674"),i=e("842b");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);e("67e7");var u=e("2877"),c=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);n["default"]=c.exports},"67e7":function(t,n,e){"use strict";var a=e("ed8d"),i=e.n(a);i.a},"842b":function(t,n,e){"use strict";e.r(n);var a=e("88a3"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=i.a},"88a3":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{complaint_list:[]}},onLoad:function(){this.getComplaintList()},onPullDownRefresh:function(){this.getComplaintList(),setTimeout(function(){t.stopPullDownRefresh()},100)},methods:{getComplaintList:function(){var n=this,e=this.getGlobalAccessToken();null!=e&&t.request({url:this.serverUrl+"complaint-list",header:{Authorization:e,Accept:"application/json"},method:"GET",success:function(e){200==e.data.code?n.complaint_list=e.data.data:422==e.data.code&&t.showToast({title:e.data.message,image:"../../static/icons/warning.png"})}})},getStatus:function(t){return 0==t?"待受理":1==t?"客服处理中":2==t?"交易正常":3==t?"交易取消":void 0},back:function(n){t.navigateBack()}}};n.default=e}).call(this,e("6e42")["default"])},defa:function(t,n,e){"use strict";(function(t){e("d058"),e("921b");a(e("66fd"));var n=a(e("21ca"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},ed8d:function(t,n,e){},f674:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.complaint_list,function(n,e){var a=t.getStatus(n.status);return{$orig:t.__get_orig(n),m0:a}}));t.$mp.data=Object.assign({},{$root:{l0:e}})},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})}},[["defa","common/runtime","common/vendor"]]]);
});
require('pages/my/myComplaint.js');
__wxRoute = 'pages/my/deposit';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/deposit.js';

define('pages/my/deposit.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/deposit"],{"0b9e":function(a,e,t){"use strict";var n=function(){var a=this,e=a.$createElement;a._self._c},o=[];t.d(e,"a",function(){return n}),t.d(e,"b",function(){return o})},"19a8":function(a,e,t){"use strict";t.r(e);var n=t("4149"),o=t.n(n);for(var i in n)"default"!==i&&function(a){t.d(e,a,function(){return n[a]})}(i);e["default"]=o.a},3189:function(a,e,t){"use strict";(function(a){t("d058"),t("921b");n(t("66fd"));var e=n(t("e8b2"));function n(a){return a&&a.__esModule?a:{default:a}}a(e.default)}).call(this,t("6e42")["createPage"])},4149:function(a,e,t){"use strict";(function(a,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{amount:"",bankname:"",bankcard:"",name:"",myname:"",images:[],remitter:"",image_uploading:!1}},onLoad:function(){var e=this,t=this.getGlobalAccessToken();null!=t&&a.request({url:this.serverUrl+"user-info",header:{Authorization:t,Accept:"application/json"},method:"GET",success:function(t){200==t.data.code?(e.name=t.data.data.admin_name,e.bankcard=t.data.data.admin_bankcard,e.bankname=t.data.data.admin_bankname,e.myname=t.data.data.name):429==t.data.code?a.showToast({title:t.data.message,image:"../../static/icons/warning.png"}):a.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!1,success:function(e){e.confirm&&a.reLaunch({url:"../registLogin/registLogin"})}})}})},methods:{copy:function(e){a.setClipboardData({data:e,success:function(){console.log(t("success"," at pages/my/deposit.vue:114"))}})},removeImage:function(e){var n=this;a.showModal({title:"删除",content:"确定删除图片？",showCancel:!0,confirmText:"确定",success:function(a){a.confirm?n.images.splice(e,1):a.cancel&&console.log(t("用户点击取消"," at pages/my/deposit.vue:129"))}})},uploadImage:function(){var e=this;a.chooseImage({success:function(n){var o=n.tempFilePaths,i=e.getGlobalAccessToken();e.image_uploading=!0,a.showLoading({title:"图片上传中"}),a.uploadFile({url:e.serverUrl+"upload",filePath:o[0],name:"file",header:{Authorization:i,Accept:"application/json"},formData:{type:"1"},success:function(n){var o=JSON.parse(n.data);console.log(t(o.data," at pages/my/deposit.vue:158")),e.images.push(o.data),setTimeout(function(){a.hideLoading()},500),e.image_uploading=!1}})}})},submit:function(){var e=this;if(this.image_uploading)a.showToast({title:"图片未上传完成",image:"../../static/icons/success.png"});else{var t=this.getGlobalAccessToken(),n=this,o=n.serverUrl;a.request({url:o+"save-deposit",header:{Authorization:t,Accept:"application/json"},data:{amount:n.amount,remitter:n.remitter,images:n.images},method:"POST",success:function(t){200==t.data.code?(e.images=[],e.amount=0,a.showModal({title:"提交成功",content:t.data.message,showCancel:!1,confirmText:"确定"})):422==t.data.code&&a.showModal({title:"提交失败",content:t.data.message,showCancel:!1,confirmText:"确定"})}})}}}};e.default=n}).call(this,t("6e42")["default"],t("0de9")["default"])},"6d5b":function(a,e,t){},a3a4:function(a,e,t){"use strict";var n=t("6d5b"),o=t.n(n);o.a},e8b2:function(a,e,t){"use strict";t.r(e);var n=t("0b9e"),o=t("19a8");for(var i in o)"default"!==i&&function(a){t.d(e,a,function(){return o[a]})}(i);t("a3a4");var s=t("2877"),c=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports}},[["3189","common/runtime","common/vendor"]]]);
});
require('pages/my/deposit.js');
__wxRoute = 'pages/help/help';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/help/help.js';

define('pages/help/help.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/help/help"],{"13e1":function(t,e,n){},"39c1":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{help_list:[]}},onLoad:function(){this.getHelpList()},methods:{showOrHide:function(t){this.help_list[t].display?this.help_list[t].display=!1:this.help_list[t].display=!0},getHelpList:function(){var e=this,a=this.getGlobalAccessToken();null!=a&&t.request({url:this.serverUrl("/api/help-list"),header:{Authorization:a,Accept:"application/json"},method:"GET",success:function(t){200==t.data.code&&(e.help_list=t.data.data.helps)},fail:function(e){console.log(n(e," at pages/help/help.vue:67")),t.showToast({title:"请检查设备时间",image:"../../static/icons/warning.png"})}})},back:function(e){t.navigateBack()}}};e.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},"4ce4":function(t,e,n){"use strict";n.r(e);var a=n("7b4c"),i=n("dcb5");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("c78f");var l=n("2877"),u=Object(l["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},"7b4c":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},a56b:function(t,e,n){"use strict";(function(t){n("d058"),n("921b");a(n("66fd"));var e=a(n("4ce4"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},c78f:function(t,e,n){"use strict";var a=n("13e1"),i=n.n(a);i.a},dcb5:function(t,e,n){"use strict";n.r(e);var a=n("39c1"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=i.a}},[["a56b","common/runtime","common/vendor"]]]);
});
require('pages/help/help.js');
__wxRoute = 'pages/my/myTeam';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/myTeam.js';

define('pages/my/myTeam.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/myTeam"],{"0c5c":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return c})},"7d8c":function(t,e,n){"use strict";n.r(e);var a=n("0c5c"),c=n("85c0");for(var u in c)"default"!==u&&function(t){n.d(e,t,function(){return c[t]})}(u);n("a2b8");var i=n("2877"),o=Object(i["a"])(c["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},"85c0":function(t,e,n){"use strict";n.r(e);var a=n("e229"),c=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=c.a},"95ce":function(t,e,n){"use strict";(function(t){n("d058"),n("921b");a(n("66fd"));var e=a(n("7d8c"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},a2b8:function(t,e,n){"use strict";var a=n("fc72"),c=n.n(a);c.a},e229:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{mine:[],team_list:[]}},onLoad:function(){var e=this,n=this.getGlobalAccessToken();null!=n&&t.request({url:this.serverUrl+"my-team",header:{Authorization:n,Accept:"application/json"},method:"GET",success:function(n){200==n.data.code?(e.mine=n.data.data.mine,e.team_list=n.data.data.others):422==n.data.code&&t.showToast({title:n.data.message,image:"../../static/icons/warning.png"})}})},methods:{back:function(e){t.navigateBack()}}};e.default=n}).call(this,n("6e42")["default"])},fc72:function(t,e,n){}},[["95ce","common/runtime","common/vendor"]]]);
});
require('pages/my/myTeam.js');
__wxRoute = 'pages/my/myTransaction';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/myTransaction.js';

define('pages/my/myTransaction.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/myTransaction"],{"01a6":function(t,a,n){"use strict";n.r(a);var e=n("fdac"),i=n.n(e);for(var s in e)"default"!==s&&function(t){n.d(a,t,function(){return e[t]})}(s);a["default"]=i.a},"3dbc":function(t,a,n){"use strict";var e=n("5aba"),i=n.n(e);i.a},"481e":function(t,a,n){"use strict";var e=function(){var t=this,a=t.$createElement,n=(t._self._c,t.__map(t.transaction_list,function(a,n){var e=t.getStatus(a.status),i=t.getStatus(a.status);return{$orig:t.__get_orig(a),m0:e,m1:i}}));t.$mp.data=Object.assign({},{$root:{l0:n}})},i=[];n.d(a,"a",function(){return e}),n.d(a,"b",function(){return i})},"5aba":function(t,a,n){},"5f3a":function(t,a,n){"use strict";(function(t){n("d058"),n("921b");e(n("66fd"));var a=e(n("dd62"));function e(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,n("6e42")["createPage"])},dd62:function(t,a,n){"use strict";n.r(a);var e=n("481e"),i=n("01a6");for(var s in i)"default"!==s&&function(t){n.d(a,t,function(){return i[t]})}(s);n("3dbc");var o=n("2877"),u=Object(o["a"])(i["default"],e["a"],e["b"],!1,null,null,null);a["default"]=u.exports},fdac:function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{transaction_list:[],display_days:""}},onLoad:function(){this.getTransactionList()},onPullDownRefresh:function(){this.getTransactionList(),setTimeout(function(){t.stopPullDownRefresh()},100)},methods:{getTransactionList:function(){var a=this,n=this.getGlobalAccessToken();null!=n&&t.request({url:this.serverUrl+"transaction-list",header:{Authorization:n,Accept:"application/json"},method:"GET",success:function(n){200==n.data.code?(a.transaction_list=n.data.data.transaction_list,a.display_days=n.data.data.display_days):422==n.data.code&&t.showToast({title:n.data.message,image:"../../static/icons/warning.png"})}})},getStatus:function(t){return 1==t?"等待您出款":2==t?"等待对方确认":3==t?"交易成功":4==t?"交易取消":void 0},back:function(a){t.navigateBack()}}};a.default=n}).call(this,n("6e42")["default"])}},[["5f3a","common/runtime","common/vendor"]]]);
});
require('pages/my/myTransaction.js');
__wxRoute = 'pages/my/myWithdraw';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/myWithdraw.js';

define('pages/my/myWithdraw.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/myWithdraw"],{"1a07":function(t,a,e){"use strict";(function(t){e("d058"),e("921b");n(e("66fd"));var a=n(e("53f1"));function n(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("6e42")["createPage"])},"280b":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=(t._self._c,t.__map(t.withdraw_list,function(a,e){var n=t.getStatus(a.status),i=t.getStatus(a.status);return{$orig:t.__get_orig(a),m0:n,m1:i}}));t.$mp.data=Object.assign({},{$root:{l0:e}})},i=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return i})},5302:function(t,a,e){},"53f1":function(t,a,e){"use strict";e.r(a);var n=e("280b"),i=e("b6b6");for(var s in i)"default"!==s&&function(t){e.d(a,t,function(){return i[t]})}(s);e("e9d1");var o=e("2877"),c=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);a["default"]=c.exports},"7e09":function(t,a,e){"use strict";(function(t,e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{withdraw_list:[],display_days:""}},onLoad:function(){this.getWithdrawList()},onPullDownRefresh:function(){this.getWithdrawList(),setTimeout(function(){t.stopPullDownRefresh()},100)},methods:{getWithdrawList:function(){var a=this,e=this.getGlobalAccessToken();null!=e&&t.request({url:this.serverUrl+"withdraw",header:{Authorization:e,Accept:"application/json"},method:"GET",success:function(e){200==e.data.code?(a.withdraw_list=e.data.data.withdraw_list,a.display_days=e.data.data.display_days):422==e.data.code&&t.showToast({title:e.data.message,image:"../../static/icons/warning.png"})}})},getStatus:function(t){return 0==t?"等待接单":1==t?"等待对方出款":2==t?"对方已出款":3==t?"交易完成":4==t?"交易取消":void 0},conform:function(a,n){var i=this;t.showModal({title:"确认",content:"您确定已收到金额？",showCancel:!0,confirmText:"确定",success:function(s){if(s.confirm){var o=i.getGlobalAccessToken(),c=i,r=c.serverUrl;t.request({url:r+"withdraw-conform/"+a,header:{Authorization:o,Accept:"application/json"},method:"GET",success:function(a){200==a.data.code?(i.$set(i.withdraw_list,n,a.data.data),t.showToast({title:a.data.message,image:"../../static/icons/success.png"})):422==a.data.code&&t.showToast({title:a.data.message,image:"../../static/icons/warning.png"})}})}else s.cancel&&console.log(e("用户点击取消"," at pages/my/myWithdraw.vue:169"))}})},back:function(a){t.navigateBack()}}};a.default=n}).call(this,e("6e42")["default"],e("0de9")["default"])},b6b6:function(t,a,e){"use strict";e.r(a);var n=e("7e09"),i=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(a,t,function(){return n[t]})}(s);a["default"]=i.a},e9d1:function(t,a,e){"use strict";var n=e("5302"),i=e.n(n);i.a}},[["1a07","common/runtime","common/vendor"]]]);
});
require('pages/my/myWithdraw.js');
__wxRoute = 'pages/my/myMessage';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/myMessage.js';

define('pages/my/myMessage.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/myMessage"],{"013a":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{message_list:[]}},onLoad:function(){var e=this,a=this.getGlobalAccessToken();null!=a&&t.request({url:this.serverUrl+"messages",header:{Authorization:a,Accept:"application/json"},method:"GET",success:function(a){200==a.data.code?e.message_list=a.data.data:422==a.data.code&&t.showToast({title:a.data.message,image:"../../static/icons/warning.png"})}})},methods:{}};e.default=a}).call(this,a("6e42")["default"])},"4e6b":function(t,e,a){"use strict";a.r(e);var n=a("013a"),s=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);e["default"]=s.a},"536b":function(t,e,a){},"6a63":function(t,e,a){"use strict";(function(t){a("d058"),a("921b");n(a("66fd"));var e=n(a("7b92"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"7b92":function(t,e,a){"use strict";a.r(e);var n=a("e03f"),s=a("4e6b");for(var u in s)"default"!==u&&function(t){a.d(e,t,function(){return s[t]})}(u);a("eb79");var o=a("2877"),r=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},e03f:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=(t._self._c,t.__map(t.message_list,function(e,a){var n=e.created_at.substr(11,5);return{$orig:t.__get_orig(e),g0:n}}));t.$mp.data=Object.assign({},{$root:{l0:a}})},s=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})},eb79:function(t,e,a){"use strict";var n=a("536b"),s=a.n(n);s.a}},[["6a63","common/runtime","common/vendor"]]]);
});
require('pages/my/myMessage.js');
__wxRoute = 'pages/update/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/update/index.js';

define('pages/update/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/update/index"],{"4b08":function(t,s,e){},"6d6c":function(t,s,e){"use strict";e.r(s);var a=e("feef"),i=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(s,t,function(){return a[t]})}(n);s["default"]=i.a},"7bb9":function(t,s,e){"use strict";var a=e("4b08"),i=e.n(a);i.a},"95d0":function(t,s,e){"use strict";e.r(s);var a=e("afc6"),i=e("6d6c");for(var n in i)"default"!==n&&function(t){e.d(s,t,function(){return i[t]})}(n);e("7bb9");var o=e("2877"),l=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);s["default"]=l.exports},afc6:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement;t._self._c},i=[];e.d(s,"a",function(){return a}),e.d(s,"b",function(){return i})},cc22:function(t,s,e){"use strict";(function(t){e("d058"),e("921b");a(e("66fd"));var s=a(e("95d0"));function a(t){return t&&t.__esModule?t:{default:t}}t(s.default)}).call(this,e("6e42")["createPage"])},feef:function(t,s,e){"use strict";(function(t,e){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={components:{},data:function(){return{info:"正在加载",Minfo:"未知",Mtip:"",updateInfo:"无",latest:null,packgeSize:null,packgePath:null,downloadTask:null,downloadProgress:0,buttonLoading:!1,installed:!1,startProgress:!1,currentIsLatest:!0}},onReady:function(){this.getLatest();var s=t.getStorageSync("updated");s.packgePath&&(this.packgePath=s.packgePath)},onShow:function(){!0===this.installed&&this.packgePath&&(this.installed=!1,this.haveDownloaded())},onUnload:function(){this.downloadTask&&(this.closeTask(),this.showToast("更新被取消"))},onPullDownRefresh:function(){this.getLatest(),t.stopPullDownRefresh()},methods:{showToast:function(s){t.showToast({title:s,duration:3e3,icon:"none"})},installPackge:function(){plus.runtime.install(this.packgePath,{force:!0}),this.installed=!0,t.setStorage({key:"updated",data:{completed:!0,packgePath:this.packgePath},success:function(t){console.log(e("成功保存更新记录"," at pages/update/index.vue:112"))}}),this.packgePath.match(RegExp(/.wgt/))&&(this.installed=!1,t.showModal({title:"提示",content:"应用将重启以完成更新",showCancel:!1,complete:function(){plus.runtime.restart()}}))},haveDownloaded:function(){var s=this;t.showModal({title:"更新尚未完成",content:"您已下载更新包，但是还没有完成安装，请问是否要继续安装更新包呢？",success:function(t){t.confirm?s.installPackge():t.cancel&&s.showToast("更新被取消")}})},getLatest:function(){var s=this;this.info="正在加载",this.Minfo="未知",this.updateInfo="无",this.buttonLoading=!0,this.latest=null,t.request({url:this.serverUrl+"version/info",method:"GET",success:function(t){if(200===t.data.code){var e=t.data.data;s.latest=e.info,s.buttonLoading=!1,s.checkLatest()}}})},checkLatest:function(){this.latest.id?this.$current.id!=this.latest.id?(this.currentIsLatest=!1,this.Mtip="发现新版本",this.info=this.latest.name+" "+this.latest.number,this.updateInfo=this.latest.info,this.packgeSize=(this.latest.packgeSize/1048576).toFixed(2)+"MB",this.setMinfo(this.latest.type)):(this.showToast("当前是最新版了"),this.currentIsLatest=!0,this.Mtip="当前是最新版",this.info=this.latest.name+" "+this.latest.number,this.updateInfo=this.latest.info,this.setMinfo(this.latest.type)):this.Mtip="未找到发行版本"},setMinfo:function(t){switch(t){case"base":this.Minfo="结构版";break;case"alpha":this.Minfo="内测版";break;case"beta":this.Minfo="公测版";break;case"rc":this.Minfo="终测版";break;case"release":this.Minfo="正式版";break;default:this.Minfo="未知"}},closeTask:function(){this.downloadTask.abort(),this.downloadTask=null,this.startProgress=!1},createTask:function(s){var e=this;this.packgePath?this.haveDownloaded():(this.downloadProgress=0,this.startProgress=!0,this.downloadTask=t.downloadFile({url:s,success:function(s){200===s.statusCode&&t.saveFile({tempFilePath:s.tempFilePath,success:function(t){e.packgePath=t.savedFilePath,e.installPackge(),e.closeTask()}})}}),this.downloadTask.onProgressUpdate(function(t){e.downloadProgress=t.progress}))},handleUpdate:function(){"android"===plus.os.name.toLowerCase()?this.latest.androidLink&&"#"!==this.latest.androidLink?this.createTask(this.latest.androidLink):this.showToast("未找到下载地址"):this.latest.iosLink&&"#"!==this.latest.iosLink?this.latest.iosLink.match(RegExp(/.wgt/))?this.createTask(this.latest.iosLink):plus.runtime.openURL(this.latest.iosLink):this.showToast("未找到ios商店地址")}}};s.default=a}).call(this,e("6e42")["default"],e("0de9")["default"])}},[["cc22","common/runtime","common/vendor"]]]);
});
require('pages/update/index.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

