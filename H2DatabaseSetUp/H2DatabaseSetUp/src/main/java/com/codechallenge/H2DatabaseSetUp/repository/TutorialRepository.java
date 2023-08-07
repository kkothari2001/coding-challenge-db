package com.codechallenge.H2DatabaseSetUp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
import com.codechallenge.H2DatabaseSetUp.model.Tutorial;

//@Repository
public interface TutorialRepository extends JpaRepository<Tutorial, Long> {
  List<Tutorial> findByPublished(boolean published);

  List<Tutorial> findByTitleContaining(String title);

//void save(Tutorial tutorial);
}
