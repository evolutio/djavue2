#!/bin/bash
export COMPOSE_PROJECT_NAME={{name}}_${CI_COMMIT_SHA}
docker-compose -f docker/compose/test.yml run {{name}} unittests.sh
exitcode=$?
docker-compose -f docker/compose/test.yml down
exit $exitcode
