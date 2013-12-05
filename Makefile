BS_FILES =\
    lib/lib.js\
	lib/ometa-base.js\
    lib/parser.js\
    lib/bs-js-compiler.js\
    lib/bs-ometa-compiler.js\
    lib/bs-ometa-optimizer.js\
    lib/bs-ometa-js-compiler.js\
    lib/main.js

OMETA_FILES = \
    lib/bs-js-compiler.txt\
    lib/bs-ometa-compiler.txt\
    lib/bs-ometa-js-compiler.txt\
    lib/bs-ometa-optimizer.txt

all: bin/ometac

bin/ometac:
	echo "#!/usr/bin/env node\n" > bin/ometac
	cat $(BS_FILES) >> bin/ometac
	chmod +x bin/ometac

