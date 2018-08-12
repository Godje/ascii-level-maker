let SessionLoad = 1
if &cp | set nocp | endif
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd /media/daniel/therest/linux/github/ascii-level-maker
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +1 website-assets/js/model.js
badd +1 website-assets/js/index.js
badd +1 website-assets/js/modules/Settings.js
badd +1 website-assets/scss/settings.scss
badd +7 website-assets/scss/styles.scss
badd +1 website-assets/scss/vars.scss
badd +0 website-assets/js/modules/App.js
badd +0 website-assets/js/modules/Tools.js
badd +0 website-assets/scss/tools.scss
argglobal
silent! argdel *
$argadd website-assets/js/model.js
set stal=2
edit website-assets/js/modules/Settings.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd _ | wincmd |
split
1wincmd k
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=1 winheight=1 winminwidth=1 winwidth=1
exe 'vert 1resize ' . ((&columns * 118 + 117) / 235)
exe '2resize ' . ((&lines * 24 + 31) / 62)
exe 'vert 2resize ' . ((&columns * 116 + 117) / 235)
exe '3resize ' . ((&lines * 34 + 31) / 62)
exe 'vert 3resize ' . ((&columns * 116 + 117) / 235)
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=20
setlocal fml=1
setlocal fdn=20
setlocal fen
16
normal! zo
17
normal! zo
18
normal! zo
19
normal! zo
19
normal! zc
43
normal! zo
47
normal! zo
49
normal! zo
51
normal! zo
49
normal! zo
51
normal! zo
51
normal! zo
54
normal! zo
54
normal! zo
56
normal! zo
59
normal! zo
let s:l = 49 - ((48 * winheight(0) + 29) / 59)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
49
normal! 014|
wincmd w
argglobal
if bufexists('website-assets/js/model.js') | buffer website-assets/js/model.js | else | edit website-assets/js/model.js | endif
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=20
setlocal fml=1
setlocal fdn=20
setlocal fen
4
normal! zo
let s:l = 1 - ((0 * winheight(0) + 12) / 24)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
wincmd w
argglobal
if bufexists('website-assets/js/modules/App.js') | buffer website-assets/js/modules/App.js | else | edit website-assets/js/modules/App.js | endif
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=20
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 23 - ((22 * winheight(0) + 17) / 34)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
23
normal! 0
wincmd w
exe 'vert 1resize ' . ((&columns * 118 + 117) / 235)
exe '2resize ' . ((&lines * 24 + 31) / 62)
exe 'vert 2resize ' . ((&columns * 116 + 117) / 235)
exe '3resize ' . ((&lines * 34 + 31) / 62)
exe 'vert 3resize ' . ((&columns * 116 + 117) / 235)
tabedit website-assets/js/modules/Tools.js
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=1 winheight=1 winminwidth=1 winwidth=1
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=20
setlocal fml=1
setlocal fdn=20
setlocal fen
5
normal! zo
6
normal! zo
7
normal! zo
14
normal! zo
15
normal! zo
14
normal! zo
15
normal! zo
14
normal! zo
15
normal! zo
15
normal! zo
16
normal! zo
let s:l = 15 - ((14 * winheight(0) + 29) / 59)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
15
normal! 024|
tabedit website-assets/scss/tools.scss
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd _ | wincmd |
split
1wincmd k
wincmd w
wincmd w
set nosplitbelow
set nosplitright
wincmd t
set winminheight=1 winheight=1 winminwidth=1 winwidth=1
exe '1resize ' . ((&lines * 34 + 31) / 62)
exe 'vert 1resize ' . ((&columns * 117 + 117) / 235)
exe '2resize ' . ((&lines * 24 + 31) / 62)
exe 'vert 2resize ' . ((&columns * 117 + 117) / 235)
exe 'vert 3resize ' . ((&columns * 117 + 117) / 235)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=20
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 23 - ((19 * winheight(0) + 17) / 34)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
23
normal! 017|
wincmd w
argglobal
if bufexists('website-assets/scss/vars.scss') | buffer website-assets/scss/vars.scss | else | edit website-assets/scss/vars.scss | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=20
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 16 - ((15 * winheight(0) + 12) / 24)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
16
normal! 0
wincmd w
argglobal
if bufexists('website-assets/scss/settings.scss') | buffer website-assets/scss/settings.scss | else | edit website-assets/scss/settings.scss | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=20
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 7 - ((6 * winheight(0) + 29) / 59)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
7
normal! 0
wincmd w
exe '1resize ' . ((&lines * 34 + 31) / 62)
exe 'vert 1resize ' . ((&columns * 117 + 117) / 235)
exe '2resize ' . ((&lines * 24 + 31) / 62)
exe 'vert 2resize ' . ((&columns * 117 + 117) / 235)
exe 'vert 3resize ' . ((&columns * 117 + 117) / 235)
tabnext 3
set stal=1
if exists('s:wipebuf')
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOc
set winminheight=1 winminwidth=1
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
