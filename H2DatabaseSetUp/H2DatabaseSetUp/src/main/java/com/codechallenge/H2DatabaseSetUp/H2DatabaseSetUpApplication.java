package com.codechallenge.H2DatabaseSetUp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

import com.codechallenge.H2DatabaseSetUp.model.Tutorial;
import com.codechallenge.H2DatabaseSetUp.repository.TutorialRepository;

@SpringBootApplication
public class H2DatabaseSetUpApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(H2DatabaseSetUpApplication.class, args);
	}
	
	@Autowired
    private TutorialRepository tutorialRepository;

    @Override
    public void run(String...args) throws Exception {
        this.tutorialRepository.save(new Tutorial("Java Core", "Core Programming", false));
        this.tutorialRepository.save(new Tutorial("Java Advanced", "Intermediate coding", false));
        this.tutorialRepository.save(new Tutorial("Microservices",  "Enterprise apps", false));
        this.tutorialRepository.save(new Tutorial("Python",  "For data science", false));

    }

}
