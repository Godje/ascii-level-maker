let SessionLoad = 1
if &cp | set nocp | endif
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd /mnt/c/Users/Owner/Google\ Drive/PROJECTS/github/ascii-level-maker
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +1 index.html
badd +2 ./website-assets/js/index.js
badd +20 website-assets/scss/styles.scss
badd +40 gulpfile.js
badd +1 website-assets/js/modules/App.js
badd +13 website-assets/js/model.js
badd +3 website-assets/js/modules/Canvas.js
badd +1 website-assets/scss/settings.scss
badd +1 website-assets/scss/vars.scss
badd +153 ~/.vimrc
badd +0 package-lock.json
badd +5 package.json
badd +4 website-assets/js/modules/Settings.js
badd +0 website-assets/js/modules/Tools.js
argglobal
silent! argdel *
$argadd index.html
set stal=2
tabnew
tabnew
tabnext -2
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
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 119 + 119) / 238)
exe '2resize ' . ((&lines * 34 + 30) / 61)
exe 'vert 2resize ' . ((&columns * 118 + 119) / 238)
exe '3resize ' . ((&lines * 23 + 30) / 61)
exe 'vert 3resize ' . ((&columns * 118 + 119) / 238)
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
45
normal! zo
47
normal! zo
47
normal! zo
50
normal! zo
50
normal! zo
52
normal! zo
55
normal! zo
61
normal! zo
let s:l = 55 - ((47 * winheight(0) + 29) / 58)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
55
normal! 0
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
11
normal! zo
let s:l = 14 - ((13 * winheight(0) + 17) / 34)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
14
normal! 06|
wincmd w
argglobal
if bufexists('./website-assets/js/index.js') | buffer ./website-assets/js/index.js | else | edit ./website-assets/js/index.js | endif
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=20
setlocal fml=1
setlocal fdn=20
setlocal fen
8
normal! zo
let s:l = 4 - ((2 * winheight(0) + 11) / 23)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
4
normal! 06|
wincmd w
exe 'vert 1resize ' . ((&columns * 119 + 119) / 238)
exe '2resize ' . ((&lines * 34 + 30) / 61)
exe 'vert 2resize ' . ((&columns * 118 + 119) / 238)
exe '3resize ' . ((&lines * 23 + 30) / 61)
exe 'vert 3resize ' . ((&columns * 118 + 119) / 238)
tabnext
edit website-assets/js/modules/Tools.js
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
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
9
normal! zo
10
normal! zo
14
normal! zo
let s:l = 11 - ((10 * winheight(0) + 29) / 58)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
11
normal! 018|
tabnext
edit website-assets/scss/vars.scss
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
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 29 + 30) / 61)
exe 'vert 1resize ' . ((&columns * 118 + 119) / 238)
exe '2resize ' . ((&lines * 28 + 30) / 61)
exe 'vert 2resize ' . ((&columns * 118 + 119) / 238)
exe 'vert 3resize ' . ((&columns * 119 + 119) / 238)
argglobal
setlocal fdm=syntax
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=20
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 10 - ((9 * winheight(0) + 14) / 29)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
10
normal! 0
wincmd w
argglobal
if bufexists('website-assets/scss/styles.scss') | buffer website-assets/scss/styles.scss | else | edit website-assets/scss/styles.scss | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=20
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 12 - ((1 * winheight(0) + 14) / 28)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
12
normal! 03|
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
let s:l = 117 - ((28 * winheight(0) + 29) / 58)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
117
normal! 013|
wincmd w
3wincmd w
exe '1resize ' . ((&lines * 29 + 30) / 61)
exe 'vert 1resize ' . ((&columns * 118 + 119) / 238)
exe '2resize ' . ((&lines * 28 + 30) / 61)
exe 'vert 2resize ' . ((&columns * 118 + 119) / 238)
exe 'vert 3resize ' . ((&columns * 119 + 119) / 238)
tabnext 3
set stal=1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0
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
