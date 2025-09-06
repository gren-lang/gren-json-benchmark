`app` is a build containing the optimized json encode implementation.
`app_original` is a build without.

Run the benchmark using `hyperfine --warmup=100 'node app_original' 'node app'`
