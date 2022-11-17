import { exec as execNonPromise } from 'child_process'
import util from 'util'
const exec = util.promisify(execNonPromise)

await exec('mkdir ./LWM2M')
	.then((element) => console.log(element, 'LWM2M created'))
	.catch((err) => console.log(err))

await exec('cd ./LWM2M && mkdir XML && mkdir JSON && mkdir TS')
	.then((element) =>
		console.log(element, 'XML, JSON and TS folder created into LWM2M folder'),
	)
	.catch((err) => console.log(err))

await exec(
	'cd ./LWM2M/XML && git clone git@github.com:OpenMobileAlliance/lwm2m-registry.git',
)
	.then((element) => console.log(element, 'Repo cloned into ./LWM2M/XML'))
	.catch((err) => console.log(err))

/*
exec(
  `mkdir ./LWM2M && cd ./LWM2M && mkdir XML && mkdir JSON && mkdir TS && cd XML && git clone git@github.com:OpenMobileAlliance/lwm2m-registry.git`,
  (error) => {
    if (error) {
      console.warn(error);
    }
  }
);
*/
