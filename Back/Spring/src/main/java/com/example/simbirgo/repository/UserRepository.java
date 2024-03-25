package com.example.simbirgo.repository;


import com.example.simbirgo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByLogin(String username);
	Optional<User> findByEmail(String email);

	Boolean existsByLogin(String login);

	Boolean existsByEmail(String email);

	@Query(value = "SELECT * FROM users LIMIT :count OFFSET :start", nativeQuery = true)
	List<User> findAllUsers(@Param("start") int start, @Param("count") int count);


}
