# spring-boot-gosu

Example of a spring-boot Über-jar which bundles Gosu core libraries.

Two key tweaks to the spring-boot-maven-plugin were necessary:

1. `<requiresUnpack>` Gosu doesn't know how to load jars-within-a-jar, which is why the enhancements were not being discovered. It is a much easier and less-risky move to tell spring to "unzip" any bundled dependencies, putting its sources directly on the classpath.
2. `<includeSystemScope>` This causes tools.jar to be added at runtime, which gets rid of the annoying `!! Unable to dynamically compile Java from source.  tools.jar is missing from classpath.` message

## Execution
Run these steps:
* $ mvn clean package
* $ java -jar target/helloworld-spring-boot.jar