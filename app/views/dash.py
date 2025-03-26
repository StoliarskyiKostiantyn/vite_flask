from flask import render_template, Blueprint
from flask_login import login_required


bp = Blueprint("dash", __name__, url_prefix="/dash")


@bp.route("/")
@login_required
def index():
    return render_template("dash/dash.html")
