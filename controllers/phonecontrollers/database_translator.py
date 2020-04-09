import js2py
from js2py import require



from js2py import require
import sys
import Naked.toolshed.shell  #import execute_js, mutren_js
# Use jsFile as variable to call js functions from example.js
#sys.path.append('./../../models/webmodels/DB_models')
#context = js2py.EvalJs(enable_require=True)
#context.eval("require('esprima').parse('var a = 1')")

#const con = require('./connect.js');
#const addNew = require('./addExp.js');
#const update = require('./updateExp.js');


#x2, y2 = js2py.run_file('./../../models/webmodels/DB_models/connect.js')
#from twilioCont import *
#response = Naked.toolshed.shell.muterun_js('./../../models/webmodels/DB_models/twilioCont.js')
#if response.exitcode == 0:
#    print(response.stdout)
#else:
#    print("Err")
#    sys.stderr.write(response.stderr)
#js2py.translate_file('./../../models/webmodels/DB_models/twilioCont.js', 'twilioCont.py')
#from twilioCont import *

def get_one(x):
    #jsFile.
    return True


def get_all():
    return [1, 2, 3]


def update(phone_number, message):

    ctx = js2py.EvalJs(enable_require=True)
    ctx.execute("var esprima = require('esprima');")
    ctx.execute("esprima.parse('var a = 1')")
    x, y = js2py.run_file('./../../models/webmodels/DB_models/twilioCont.js')
    #print(phone_number)
    #print(message)
    #js2py.translate_file('./../../models/webmodels/DB_models/twilioCont.js', 'twilioCont.py')
    #from twilioCont import *

    #twilioCont.PyJsHoisted_twilioCont_(phone_number, message)
    x, y = js2py.run_file('addExp.js')


    y.main(phone_number, 'gift')
    return True
