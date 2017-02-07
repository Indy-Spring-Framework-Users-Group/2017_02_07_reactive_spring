package com.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

@RestController
public class KappaController {

    /**
     * Everything looks normal except for the type
     * Flux basically sets up a publish stream over the kappa route
     * This adheres to the reactive stream spec
     * */
    @GetMapping("/kappa")
    public Flux<Double> getKappas() {
        return genRandomKappaStream();
    }

    /**
     * Randon kappa generator that creates a Flux object
     * that emits 10 random numbers. delayMillis(long l) stops the Flux
     * signal to Subscribes.onNext(T) for l.
     *
     */
    private Flux<Double> genRandomKappaStream() {
        return Flux.range(1, 10)
                .delayMillis(500)
                .map(i -> Math.random());
    }

}
