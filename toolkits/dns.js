var dns = require('dns');

function query(hostname) {
	dns.lookup(hostname, function onLookup(err, address, family) {
		if (err)
			return console.error(err);

		console.log("IP Address for", hostname, ":", address);
		dns.reverse(address, function(err, hostnames) {
			if (err)
				return console.error(err);

			console.log("reverse", address, ":", JSON.stringify(hostnames));
		});
	});
}

query('www.github.com');
query('localhost');
query('www.sohu.com');