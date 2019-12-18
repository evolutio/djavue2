import json
import os


def list_settings():
    d = {k: os.getenv(k) for k in FORWARD_ENV}
    return d


FORWARD_ENV = {
    'SENTRY_DSN_FRONT',
}
